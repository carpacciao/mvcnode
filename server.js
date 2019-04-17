'use strict';

const Hapi = require('hapi')
const Hoek = require('hoek')
const mongoose = require('mongoose')
const Settings = require('./settings/settings')

/* VALIDATE FOR JWT */
const validate = async function (decoded, request) {
  // do your checks to see if the person is valid
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
  const server = new Hapi.Server({
    port: Settings.SERVER.PORT,
    host: Settings.SERVER.HOST
  });

  server.route({
    method: 'GET',
    path: '/',
    config: {auth: 'jwt'},
    handler: (request, reply) => {
      return true
    },
  })
  //auth jwt
  await server.register(require('hapi-auth-jwt2'));
  server.auth.strategy('jwt', 'jwt', {
    key: 'NeverShareYourSecret', // Never Share your secret key
    validate: validate, // validate function defined above
    verifyOptions: {
      algorithms: ['HS256']
    } // pick a strong algorithm
  });
   server.auth.default('jwt');

  await server.start()
  return server
}

init().then(server => {
  console.log('Server is running at: ' + server.info.uri)
}).catch(err => {
  Hoek.assert(!err, err)
})
