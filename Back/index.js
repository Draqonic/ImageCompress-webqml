const log = console.log
const config = require('./config')
const express = require('express')
const cors = require('cors')

const path = require('path')
const download = require('image-downloader')
const dateFormat = require('dateformat')

const sharp = require('sharp')
sharp.cache(false)

const mysql = require('mysql')
const connection = mysql.createConnection(config.mysql)
connection.connect(err => err ? log(err) : log(`[MySQL] Connected`))

const Tools = require('./Tools/tools')

// create directory if not exists
Tools.createDir(config.dirTemp)
Tools.createDir(config.dirCompress)

const app = express()
app.use(cors())
app.use('/', express.static('web'))
app.use('/images', express.static('images-compress'))

app.get('/add', (req, res) => {
  let imageUrl = req.query.url // TODO: check url
  let jpegQuality = Math.round(req.query.jpegQuality) || 20
  let pngCompress = Math.round(req.query.pngCompress) || 9
  let imageName = Tools.detectName(imageUrl)
  let fileName = Tools.sha256(Date.now().toString())
  let compressFile = path.join(config.dirCompress, fileName + '.jpeg')
  let imageSize = 0
  let compressSize = 0

  if (jpegQuality < 1 || jpegQuality > 100) {
    jpegQuality = 20
  }

  const downloadOptions = {
    url: imageUrl,
    dest: path.join(config.dirTemp, fileName + '.jpeg')
  }

  download.image(downloadOptions)
    .then(({ filename, image }) => {
      let tempName = filename

      log(`[Saved] ${tempName}`)
      imageSize = Tools.getFileSizeMb(tempName)

      sharp(tempName)
        .jpeg({ quality: jpegQuality })
        .toFile(compressFile, err => {
          if (err) {
            log('[Convert error]', err)
            Tools.removeFile(tempName)
            res.json({ result: false, error: 'Convert' })
          } else {
            let compressDate = new Date()
            let compressDateFormat = dateFormat(compressDate, 'yyyy-mm-dd HH:MM:ss')
            compressSize = Tools.getFileSizeMb(compressFile)
            Tools.removeFile(tempName)

            const post = {
              name: imageName,
              original_size: imageSize,
              original_url: imageUrl,
              compress_size: compressSize,
              file: fileName + '.jpeg',
              time: compressDateFormat
            }
            log('11111111111', imageUrl)

            const query = connection.query('INSERT INTO `image_list` SET ?', post, function (error, results, fields) {
              if (error) {
                log(`[SQL] ${error}`)
                res.json({ result: false, error: 'SQL' })
              } else {
                log(`[SQL] ${query.sql}`)

                let result = {
                  result: true,
                  date: compressDateFormat,
                  image: {
                    original: { name: imageName, size: imageSize, url: imageUrl },
                    compress: { name: fileName + '.jpeg', size: compressSize, quality: jpegQuality }
                  }
                }
                res.json(result)
              }
            })
          }
        })
    })
    .catch((err) => {
      console.error('[Download Error]\n', err)
      res.json({ result: false, error: 'Download' })
    })

  // TODO: png .png({ compressionLevel: * })
})

app.get('/all', (req, res) => {
  connection.query('SELECT * FROM `image_list` ORDER BY `time` DESC', function (error, results, fields) {
    if (error) {
      res.json({ result: false, error: 'SQL' })
      return
    }

    for (const obj of results) {
      obj.time = dateFormat(obj.time, 'yyyy-mm-dd HH:MM:ss')
    }

    res.json(results)
  })
})

app.listen(config.appPort, () => log(`[Express] Started on port ${config.appPort}`))
