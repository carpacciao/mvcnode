'use strict'
const User = require('../controllers/UserController')

module.exports = [
  {
    method: 'GET',
    path: '/user/create',
    // config: {auth: 'jwt'},
    handler: (request, reply) => {
      return reply.response()
    }
  },
  {
    method: 'GET',
    path: '/lol',
    // config: {auth: 'jwt'},
    handler: User.lol
  },
  {
    method: 'GET',
    path: '/user/login',
    // config: {auth: 'jwt'},
    handler: (request, reply) => {
      return reply.response({user:'login'})
    }
  }
]
