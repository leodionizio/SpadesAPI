'use strict'

let Boom = require('boom')
let User = require('../../models/users')

exports.create = (request, reply) => {
  User.forge(request.payload)
    .save()
    .then(user =>
      reply({
        error: false,
        status:202,
        data: user
      }).code(202)
    )
    .catch(err =>
      reply(Boom.badData('Erro ao criar usuário, verifique os dados informados!')).code(422)
    )
}
