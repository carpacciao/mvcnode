'use strict';

const Hapi = require('hapi')
const Hoek = require('hoek')
const mongoose = require('mongoose')
const Settings = require('./settings/settings')

console.log(Settings)

/* BASIC SERVER */
const init = async () => {
  const server = new Hapi.Server({
    port: Settings.SERVER.PORT,
    host: Settings.SERVER.HOST
  });

  server.route({
    method: 'GET',
    path: '/',
    handler: (request, reply) => {
      return 'hello'
    },
  })
  await server.start()
  console.log('Server is running at: ' + server.info.uri)
}

process.on('unhandledRejection', (err) => {
  Hoek.assert(!err, err)
  process.exit(1);
});

init()
