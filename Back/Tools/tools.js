const fs = require('fs')
const path = require('path')
const url = require('url')
const crypto = require('crypto')

class Tools {
  static detectName (imageUrl) {
    let parsed = url.parse(imageUrl)
    return path.basename(parsed.pathname)
  }

  static removeFile (fileUrl) {
    console.log('[Remove file]', fileUrl)
    const filePath = fileUrl
    fs.access(filePath, err => {
      if (!err) {
        fs.unlink(filePath, err => {
          if (err) {
            console.log('rm', err)
          }
        })
      } else {
        console.log('rm', err)
      }
    })
  }

  static getFileSizeMb (filename) {
    const stats = fs.statSync(filename)
    const fileSizeInBytes = stats.size
    const mb = (fileSizeInBytes / 1024000.0).toFixed(3)
    return mb
  }

  static createDir (dirName) {
    if (!fs.existsSync(dirName)) {
      fs.mkdirSync(dirName)
    }
  }

  static sha256 (text) {
    const sha256Hash = crypto.createHmac('sha256', 'image-name')
      .update(text)
      .digest('hex')
    return sha256Hash
  }
}

module.exports = Tools
