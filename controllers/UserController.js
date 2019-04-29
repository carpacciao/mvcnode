// require models
const User = require('../models/UserModel')

module.exports = {
  //DB ACTIONS
  store: (request, reply) => {},
  show: (request, reply) => {},
  update: (request, reply) => {},
  destory: (request, reply) => {},
  lol: (request, reply) => {
    return reply.response(typeof User)
  }
}