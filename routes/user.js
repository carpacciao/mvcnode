'use strict'

module.exports = [
  {
    method: 'GET',
    path: '/user/create',
    // config: {auth: 'jwt'},
    handler: (request, reply) => {
      return reply.response({user:'create'})
    }
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
