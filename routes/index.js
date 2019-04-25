'use strict'

module.exports = [
  // routes here
  {
    method: 'GET',
    path: '/',
    // config: {auth: 'jwt'},
    handler: (request, reply) => {
      return reply.response({lol:'lel'})
    }
  }
]