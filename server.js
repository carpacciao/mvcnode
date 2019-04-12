'use strict';

const Hapi = require('hapi')
const Hoek = require('hoek')

/* BASIC SERVER */
const init = async () => {
  const server = new Hapi.Server({
    port: 1337,
    host: 'localhost'
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