const config = require('./config')
const log = console.log

const express = require('express')
const cors = require('cors')
const fs = require('fs')
const url = require('url')
const path = require('path')
const download = require('download-file')
const sharp = require('sharp')
sharp.cache(false)

function detectName (imageUrl) {
  let parsed = url.parse(imageUrl)
  return path.basename(parsed.pathname)
}

function removeFile (fileUrl) {
  const filePath = fileUrl
  fs.access(filePath, err => {
    if (!err) {
      fs.unlink(filePath, function (err) {
        if (err) {
          console.log('rem', err)
        }
      })
    } else {
      console.log('rem', err)
    }
  })
}

// TODO: make dirs if not exist

const app = express()
app.use(cors())

app.get('/', (req, res) => {
  let url = req.query.url // TODO: check url
  let jpegQuality = Number(req.query.jpegQuality) || 50
  // let pngCompress = req.query.pngCompress || 9
  let dirName = './images-temp/'
  let fileName = detectName(url)
  let fileTemp = `./images-temp/${fileName}`

  const options = {
    directory: dirName,
    filename: fileName
  }

  download(url, options, function (err) {
    if (err) { // TODO: throw
      log('Download error')
      res.json({ result: false })
      return
    }

    // TODO: download file size
    // TODO: png .png({ compressionLevel: * })

    sharp(fileTemp)
      .jpeg({ quality: jpegQuality })
      .toFile(`./images-compress/${fileName}`, function (err) {
        if (err) {
          log('Image convert error:', err)
          res.json({ result: false })
        } else { // TODO: compress file size
          removeFile(fileTemp)
          res.json({ result: true })
        }
      })
  })
})

app.get('/all', (req, res) => {
  //
})

app.listen(config.appPort, () => log(`Started on port ${config.appPort}`))
