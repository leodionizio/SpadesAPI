'use strict'

let Boom = require('boom')
let Posts = require('../../models/posts')

exports.create = (request, reply) => {
  console.log(request.payload)
  Posts.forge(request.payload)
    .save()
    .then((post) => reply({ data: post }).code(202))
    .catch((err) => {
      reply(
        Boom.badData(
          'Erro na criação da postagem, verifique os dados informados'
        ).code(422)
      )
    })
}
