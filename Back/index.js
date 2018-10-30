const config = require('./config')
const log = console.log

const express = require('express')
const cors = require('cors')

const fs = require('fs')
const path = require('path')
const url = require('url')
const download = require('image-downloader')
const sha256 = require('sha256')
const dateFormat = require('dateformat')

const sharp = require('sharp')
sharp.cache(false)

const mysql = require('mysql')
//config.mysql.dateStrings = true
const connection = mysql.createConnection(config.mysql)
connection.connect(err => err ? log(err) : log(`[MySQL] Connected`))

// create images directory
if (!fs.existsSync(config.dirTemp)) {
  fs.mkdirSync(config.dirTemp)
}
if (!fs.existsSync(config.dirCompress)) {
  fs.mkdirSync(config.dirCompress)
}

// detect file name in url
function detectName (imageUrl) {
  let parsed = url.parse(imageUrl)
  return path.basename(parsed.pathname)
}

function removeFile (fileUrl) {
  log('[Remove file]', fileUrl)
  const filePath = fileUrl
  fs.access(filePath, err => {
    if (!err) {
      fs.unlink(filePath, function (err) {
        if (err) {
          console.log('rm', err)
        }
      })
    } else {
      console.log('rm', err)
    }
  })
}

function getFileSizeMb (filename) {
  const stats = fs.statSync(filename)
  const fileSizeInBytes = stats.size
  const mb = (fileSizeInBytes / 1024000.0).toFixed(2)
  return mb
}

const app = express()
app.use(cors())
app.use('/', express.static('web'))
app.use('/images', express.static('images-compress'))

app.get('/add', (req, res) => {
  let imageUrl = req.query.url // TODO: check url
  let jpegQuality = Math.round(req.query.jpegQuality) || 20
  let pngCompress = Math.round(req.query.pngCompress) || 9
  let imageName = detectName(imageUrl)
  let fileName = sha256(Date.now().toString())
  let compressFile = path.join(config.dirCompress, fileName + '.jpeg')
  let imageSize = 0
  let compressSize = 0

  const downloadOptions = {
    url: imageUrl,
    dest: path.join(config.dirTemp, fileName + '.jpeg')
  }

  download.image(downloadOptions)
    .then(({ filename, image }) => {
      let tempName = filename

      log(`[Saved] ${tempName}`)
      imageSize = getFileSizeMb(tempName)

      sharp(tempName)
        .jpeg({ quality: jpegQuality })
        .toFile(compressFile, err => {
          if (err) {
            log('[Convert error]', err)
            removeFile(tempName)
            res.json({ result: false, error: 'Convert' })
          } else {
            let compressDate = new Date()
            let compressDateFormat = dateFormat(compressDate, 'yyyy-mm-dd HH:MM:ss')
            compressSize = getFileSizeMb(compressFile)
            removeFile(tempName)

            const post = {
              name: imageName, original_size: imageSize, compress_size: compressSize,
              file: fileName + '.jpeg', time: compressDateFormat
            }

            const query = connection.query('INSERT INTO image_list SET ?', post, function (error, results, fields) {
              if (error) {
                log(`[SQL] ${error}`)
                res.json({ result: false, error: 'SQL' })
              } else {
                log(`[SQL] ${query.sql}`)
                res.json({ result: true,
                  date: compressDateFormat,
                  image: {
                    original: { name: imageName, size: imageSize },
                    compress: { name: fileName + '.jpeg', size: compressSize, quality: jpegQuality }
                  }
                })
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
  connection.query('SELECT * FROM image_list', function (error, results, fields) {
    if (error) {
      log(error) // throw error
      res.json({ result: false })
    }
    res.json(results)
  })
})

app.listen(config.appPort, () => log(`[Express] Started on port ${config.appPort}`))
