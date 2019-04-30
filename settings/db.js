const mongoose = require('mongoose')
const Settings = require('./settings')

mongoose.connect(Settings.DB.FULL_PATH, {
  useCreateIndex: true,
  useNewUrlParser: true
})