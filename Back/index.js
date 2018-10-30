const config = require('./config')
const log = console.log

const express = require('express')
const cors = require('cors')
const fs = require('fs')
const path = require('path')
const sha256 = require('sha256')
const sharp = require('sharp')
const url = require('url')
const download = require('image-downloader')

sharp.cache(false)

if (!fs.existsSync(config.dirTemp)) {
  fs.mkdirSync(config.dirTemp)
}
if (!fs.existsSync(config.dirCompress)) {
  fs.mkdirSync(config.dirCompress)
}

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

app.get('/add', (req, res) => {
  let imageUrl = req.query.url // TODO: check url
  let jpegQuality = Math.round(req.query.jpegQuality) || 50
  let pngCompress = Math.round(req.query.pngCompress) || 9
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
            res.json({ result: false, error: 'Convert' })
          } else {
            compressSize = getFileSizeMb(compressFile)
            removeFile(tempName)

            res.json({ result: true,
              date: Date.now(),
              image: {
                original: { name: detectName(imageUrl), size: imageSize },
                compress: { name: fileName + '.jpeg', size: compressSize, comperss: jpegQuality }
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
  //
})

app.listen(config.appPort, () => log(`Started on port ${config.appPort}`))
