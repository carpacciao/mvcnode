'use strict'
require('dotenv').config({silent: true})
let FULL_PATH

if (process.env.DB_USERNAME && process.env.DB_PASSWORD)
  FULL_PATH = 'mongodb://' + process.env.DB_USERNAME + ':' + process.env.DB_PASSWORD + '@' + process.env.DB_HOST + ':' + process.env.DB_PORT + '/' + process.env.DB_TABLE
else
  FULL_PATH = 'mongodb://' + process.env.DB_HOST + ':' + process.env.DB_PORT + '/' + process.env.DB_TABLE

module.exports = {
  SERVER: {
    HOST: process.env.SERVER_HOST,
    PORT: process.env.SERVER_PORT,
  },
  DB: {
    FULL_PATH: FULL_PATH,
    HOST: process.env.DB_HOST,
    PORT: process.env.DB_PORT,
    TABLE: process.env.DB_TABLE,
    USERNAME: process.env.DB_USERNAME,
    PASSWORD: process.env.DB_PASSWORD,
  }
}