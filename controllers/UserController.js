// require models
const User = require('../models/UserModel')

module.exports = {
  //DB ACTIONS
  store: (request, reply) => {},
  show: (request, reply) => {},
  update: (request, reply) => {},
  destory: (request, reply) => {},
  lel: (request, reply) => {
    return reply.response(typeof User)
  },
  lol: (request, reply) => { 
    let lucas = new User({username: 'Lucas10', password:'lol', email: 'lucasvd@msn.com'})
    lucas.save((err)=>console.log(err))
    return reply.response(lucas)
  }
}