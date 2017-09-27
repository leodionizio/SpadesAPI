'use strict'

let Boom = require('boom')
let Posts = require('../../models/posts')

exports.create = (request, reply) => {
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

exports.getPosts = (request, reply) => {
  Posts.forge()
    .fetchAll()
    .then((posts)=>{
      reply({ data: posts}).code(200)
    })
    }