'use strict'
const test = {
  username: 'lucas',
  password: 'oslm'
}
module.exports = [
  {
    method: 'GET',
    path: '/user/create',
    // config: {auth: 'jwt'},
    handler: (request, reply) => {
      return reply.response(test)
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
