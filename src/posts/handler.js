'use strict'

let Boom = require('boom')
let Posts = require('../../models/posts')

exports.create = (request, reply) => {
  Posts.forge(request.payload)
    .save()
    .then(post => reply({
      error: false,
      code: 202,
      data: post,
      message: 'Sua publicação foi criada com sucesso'
    }).code(202))
    .catch(err => {
      reply({
        error: true,
        code: 422,
        err: err,
        message: 'Sua publicação não pode ser criada'
      }).code(422)
    })
}

exports.getAllPosts = (request, reply) => {
  Posts.forge()
    .fetchAll()
    .then(posts => {
      reply({ data: posts }).code(200)
    })
}

exports.getByTag = (request, reply) => {
  let tags = []
  Posts.forge()
    .fetchAll()
    .then(posts => {
      reply({ data: posts }).code(200)
    })
}

exports.getByTitle = (request, reply) => {
  Posts.forge(request.params)
    .fetchAll()
    .then(posts => {
      reply({ data: posts }).code(200)
    })
}
