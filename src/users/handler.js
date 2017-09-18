'use strict'

let Boom = require('boom')
let User = require('../../models/users')

exports.create = (request, reply) => {
  User.forge(request.payload)
    .save()
    .then(
      (user) => 
      reply({ 
        data: user 
      }).code(202))
    .catch((err) => 
    reply(
      Boom.badData()
    ).code(422))
}
