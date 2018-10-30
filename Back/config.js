const config = {}

config.appPort = 3000

config.dirTemp = './images-temp/'
config.dirCompress = './images-compress'

config.mysql = {
  host: '127.0.0.1',
  port: '3306',
  user: 'root',
  password: '',
  database: 'images'
}

config.mongodb = {
}

module.exports = config
