'use strict'
const Fs = require('fs')
const Hoek = require('hoek')
let routes = []

Fs.readdirSync(__dirname)
  .filter((file) => (file.indexOf('.') !== 0) && (file !== 'index.js'))
  .forEach((file) => {
    routes = routes.concat(require('./' + file))
  })
// console.log(routes)
module.exports = routes