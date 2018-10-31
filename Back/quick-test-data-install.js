const log = console.log
const config = require('./config')
const path = require('path')
const mysql = require('mysql')
const extract = require('extract-zip')

config.mysql.database = ''
const connection = mysql.createConnection(config.mysql)
connection.connect(err => err ? log(err) : log(`[MySQL] Connected`))

function query (sql, next) {
  connection.query(sql, error => {
    if (error) {
      log(error)
      return
    }
    next()
  })
}

query('CREATE DATABASE IF NOT EXISTS `images`;',
  () => query('DROP TABLE IF EXISTS `images`.`image_list`;',
    () => query('CREATE TABLE `images`.`image_list` ( `id` int(11) NOT NULL AUTO_INCREMENT, `name` varchar(500) DEFAULT NULL, `original_url` varchar(1000) DEFAULT NULL, `original_size` double DEFAULT NULL, `compress_size` double DEFAULT NULL, `file` varchar(255) DEFAULT NULL, `time` datetime DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP, PRIMARY KEY (`id`) USING BTREE ) ENGINE=InnoDB AUTO_INCREMENT=23 DEFAULT CHARSET=utf8 ROW_FORMAT=DYNAMIC;',
      () => query("INSERT INTO `images`.`image_list` VALUES (7,'Pancake_Apples_Strawberry_Breakfast_554484_1280x853.jpg','http://s1.1zoom.me/big0/856/Pancake_Apples_Strawberry_Breakfast_554484_1280x853.jpg',0.486,0.13,'14a5dbe23832b5d576b8e327a2b252a5013c6fb2b652b87dd3c393f03879c90b.jpeg','2018-10-31 17:04:22'),(8,'Mushrooms_nature_Amanita_Closeup_554488_1280x720.jpg','http://s1.1zoom.me/big0/993/Mushrooms_nature_Amanita_Closeup_554488_1280x720.jpg',0.363,0.103,'0dd81436bfb8f980c6bc2f8f4d231580aff160aab9d6f4fdc10476c9809ef314.jpeg','2018-10-31 17:04:30'),(9,'Neuschwanstein_Germany_Castles_554491_1280x855.jpg','http://s1.1zoom.me/big0/572/Neuschwanstein_Germany_Castles_554491_1280x855.jpg',0.516,0.137,'6f959a9b402bb94c5e0163835c469e9e915a6a4135338f127421f9aabb066168.jpeg','2018-10-31 17:04:35'),(10,'Cats_Glance_Whiskers_Snout_554492_1280x853.jpg','http://s1.1zoom.me/big0/512/Cats_Glance_Whiskers_Snout_554492_1280x853.jpg',0.225,0.047,'4c33f3def205764c8fd6a58b5d92b0373dff66f7612b94565122af26a1ea3683.jpeg','2018-10-31 17:04:40'),(11,'Texture_Wood_planks_Pink_color_554495_1365x1024.jpg','http://s1.1zoom.me/big0/749/Texture_Wood_planks_Pink_color_554495_1365x1024.jpg',0.624,0.144,'ec61ef180e0bc79ae754995a59347f81c821a4ec1d465f25932373439bc525f2.jpeg','2018-10-31 17:04:45'),(12,'Leopards_Cubs_Glance_Snout_554451_1280x914.jpg','http://s1.1zoom.me/big0/611/Leopards_Cubs_Glance_Snout_554451_1280x914.jpg',0.518,0.121,'3961e0c2f38987b0340d4e506683bc92ed82498c289140e2b885765bbe9688e3.jpeg','2018-10-31 17:04:56'),(13,'Castles_Halloween_Movies_Witch_Silhouette_Moon_554472_1280x853.jpg','http://s1.1zoom.me/big0/385/Castles_Halloween_Movies_Witch_Silhouette_Moon_554472_1280x853.jpg',0.17,0.034,'7d63553419c7c08ff38d3d016cad313584b8b027268a0cd8f3f32c0f5843580b.jpeg','2018-10-31 17:05:09'),(14,'The_Witcher_3_Wild_Hunt_Geralt_of_Rivia_Warriors_554459_1280x720.jpg','http://s1.1zoom.me/big0/297/The_Witcher_3_Wild_Hunt_Geralt_of_Rivia_Warriors_554459_1280x720.jpg',0.295,0.076,'2af8e33e8870ceef36e84ea374e5439d5764b0f436c9ebe67bfae1084b1fe5d9.jpeg','2018-10-31 17:05:19'),(15,'Foliage_Maple_Book_Cup_554479_1280x853.jpg','http://s1.1zoom.me/big0/97/Foliage_Maple_Book_Cup_554479_1280x853.jpg',0.407,0.113,'5cceef7e41c4bb827e4ab1e6eebc957123621351751aab8c0ef1ffc9232b96d4.jpeg','2018-10-31 17:05:40'),(16,'Tesla_Motors_Electric_X_P90D_554482_1280x853.jpg','http://s1.1zoom.me/big0/833/Tesla_Motors_Electric_X_P90D_554482_1280x853.jpg',0.36,0.071,'d77780a13bf3c2865a0082840824a58ba0e17d8d8a6a57f1d46cf02f29470533.jpeg','2018-10-31 17:05:46'),(17,'Dogs_Fence_Wood_planks_Border_Collie_554483_1280x854.jpg','http://s1.1zoom.me/big0/198/Dogs_Fence_Wood_planks_Border_Collie_554483_1280x854.jpg',0.186,0.041,'52442d8128ae626e1e633c523013ba53dc3a050ee8867147341303c5fc1be581.jpeg','2018-10-31 17:05:51'),(18,'DJI_0001.jpg','https://d2vssufd8ezk79.cloudfront.net/wp-content/uploads/2018/10/31104750/DJI_0001.jpg',4.958,0.543,'f0e9de1b8d3e5eb4f9c9b130af0d69c04455e513f6a995eb80a898201ba0229c.jpeg','2018-10-31 17:07:18'),(20,'DJI_0001.jpg','https://d2vssufd8ezk79.cloudfront.net/wp-content/uploads/2018/10/31104750/DJI_0001.jpg',4.958,0.093,'1944ad227a7463a2d8d65007828a8f9275cf5473adb128697c66bee7ee362ed7.jpeg','2018-10-31 17:28:44'),(21,'DJI_0001.jpg','https://d2vssufd8ezk79.cloudfront.net/wp-content/uploads/2018/10/31104750/DJI_0001.jpg',4.958,0.318,'cc1dd5d474c95c58d27aacb517af0322d14cad560e53cb9fa5083a0d1a010006.jpeg','2018-10-31 17:51:49'),(22,'Mushrooms_nature_Amanita_Closeup_554488_1280x720.jpg','http://s1.1zoom.me/big0/993/Mushrooms_nature_Amanita_Closeup_554488_1280x720.jpg',0.363,0.012,'bc41c37be72576444c8cf0ae942b2fd1f2dee9608f05dceeb6a1db7a2f64ab65.jpeg','2018-10-31 19:41:31');",
        () => {
          console.log('[MySQL] Done')
          connection.end()
          extract(path.join(__dirname, 'QuickInstall', 'images-compress-test-data.zip'), { dir: __dirname }, function (error) {
            if (error) {
              log(error)
              return
            }
            console.log('[Install] Done')
          })
        }
      ))))
