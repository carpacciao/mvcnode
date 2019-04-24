'use strict';

const fs = require('fs')
const Hapi = require('hapi')
const Hoek = require('hoek')
const mongoose = require('mongoose')
const Settings = require('./settings/settings')
require('colors')
const envFile = './.env'

/* VALIDATE FOR JWT */
const validate = async function (decoded, request) {
  // do your checks to see if the person is valid
  // console.log(decoded)
  // console.log(request)
  return {
    isValid: true
  }
  // if (!people[decoded.id]) {
  //   return {
  //     isValid: false
  //   };
  // } else {
  //   return {
  //     isValid: true
  //   };
  // }
};
/* BASIC SERVER */
const init = async () => {
  // const server = new Hapi.Server(Settings.SERVER.HOST, Settings.SERVER.PORT, {cors: true})
  const server = new Hapi.Server({
    port: Settings.SERVER.PORT,
    host: Settings.SERVER.HOST,
    routes: {
      cors: {
        origin: ['*'], // an array of origins or 'ignore'
        headers: ["Accept", "Authorization", "Content-Type", "If-None-Match", "Accept-language"], // an array of strings - 'Access-Control-Allow-Headers' 
        
        exposedHeaders: ['Accept'], // an array of exposed headers - 'Access-Control-Expose-Headers',
        // additionalExposedHeaders: ['Accept'], // an array of additional exposed headers
        additionalHeaders: ['cache-control', 'x-requested-with'],
        maxAge: 60,
        credentials: true // boolean - 'Access-Control-Allow-Credentials'
      }
    }
  });
  //auth jwt
  await server.register(require('hapi-auth-jwt2'));
  // cors hapi
  // await server.register({
  //   plugin: require('hapi-cors'),
  //   options: {
  //     origins: ['http://localhost:1337']
  //   }
  // })
  server.auth.strategy('jwt', 'jwt', {
    key: 'NeverShareYourSecret', // Never Share your secret key
    validate: validate, // validate function defined above
    verifyOptions: {
      algorithms: ['HS256']
    } // pick a strong algorithm
  });
  // server.auth.default('jwt');

  server.route({
    method: 'GET',
    path: '/',
    // config: {auth: 'jwt'},
    handler: (request, reply) => {
      return reply.response({
        lol: 'lel'
      })
    },
  })

  await server.start()
  return server
}

init()
  .then(server => {
    fs.existsSync(envFile) ? console.log('file .env find !'.green) : console.log('.env wasn\'t found, please create one and restart'.bgRed)
    console.log('Server is running at: ' + server.info.uri)
  })
  .catch(err => {
    Hoek.assert(!err, err)
  })