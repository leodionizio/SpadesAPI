'use strict'

let Jwt = require('jsonwebtoken')
let User = require('../../models/users')
const tokenKey = '123456789'

exports.create = (request, reply) => {
  User.forge(request.payload)
    .save()
    .then(user => {
      let token = Jwt.sign({ id: user.id }, tokenKey, { expiresIn: '1h' })
      reply().hold()
      reply().header('Authorization', 'Bearer ' + token).code(202)
      reply({
        error: false,
        status: 202,
        message: 'Seu usuário foi criado com sucesso',
        data: user
      }).send()
    })
    .catch(err =>
      reply({
        error: true,
        err: err,
        status: 422,
        message: 'Erro ao criar usuário, verifique os dados informados!'
      }).code(422)
    )
}

exports.verifyUser = (request, reply) => {
  User.forge(request.payload)
    .fetch({ require: true })
    .then(user =>
      reply({
        error: false,
        status: 202,
        message: 'Usuário autenticado sucesso!',
        data: user
      }).code(202)
    )
    .catch(err =>
      reply(
        Boom.badData(
          'Erro ao autenticar usuário, verifique os dados informados!'
        )
      ).code(422)
    )
}

exports.resetPass = (request, reply) => {
  User.forge(request.payload)
    .save()
    .then(user =>
      reply({
        error: false,
        status: 202,
        data: user
      }).code(202)
    )
    .catch(err =>
      reply(
        Boom.badData('Erro ao resetar sua senha, reinicie o processo!')
      ).code(422)
    )
}
