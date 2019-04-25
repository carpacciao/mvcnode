'use strict';

const fs = require('fs')
const Hapi = require('hapi')
const Hoek = require('hoek')
const Settings = require('./settings/settings')
const Routes = require('./routes/index')
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

  const server = new Hapi.Server({
    port: Settings.SERVER.PORT,
    host: Settings.SERVER.HOST,
    routes: {
      cors: Settings.SERVER.CORS
    }
  })

  //Plugins for HAPI JS
  await server.register(require('hapi-auth-jwt2'))

  //Auth Strategy
  server.auth.strategy('jwt', 'jwt', {
    key: 'NeverShareYourSecret', // Never Share your secret key
    validate: validate, // validate function defined above
    verifyOptions: {
      algorithms: ['HS256']
    } // pick a strong algorithm
  });
  // server.auth.default('jwt'); // All routes will be jwt auth

  server.route(Routes)

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
    process.exit(1)
  })