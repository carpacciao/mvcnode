'use strict'
require('dotenv').config({silent: true})

//FULL PATH
function getMongoFullPath () {
  if (process.env.DB_USERNAME && process.env.DB_PASSWORD)
    return 'mongodb://' + process.env.DB_USERNAME + ':' + process.env.DB_PASSWORD + '@' + process.env.DB_HOST + ':' + process.env.DB_PORT + '/' + process.env.DB_TABLE
  else
    return 'mongodb://' + process.env.DB_HOST + ':' + process.env.DB_PORT + '/' + process.env.DB_TABLE
}


module.exports = {
  SERVER: {
    HOST: process.env.SERVER_HOST,
    PORT: process.env.SERVER_PORT,
    CORS: require('./cors')
  },
  DB: {
    FULL_PATH: getMongoFullPath(),
    HOST: process.env.DB_HOST,
    PORT: process.env.DB_PORT,
    TABLE: process.env.DB_TABLE,
    USERNAME: process.env.DB_USERNAME,
    PASSWORD: process.env.DB_PASSWORD,
  },
}