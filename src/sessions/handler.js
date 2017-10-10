'use strict'

let Boom = require('boom')
let Jwt = require('jsonwebtoken')
let User = require('../../models/users')
const tokenKey = '123456789'
exports.login = (request, reply) => {
  let session
  User.forge(request.payload.user)
    .fetch({ require: true })
    .then(result => {
      session = result
      return result.compare(request.payload.password)
    })
    .then(isValid => {
      if (!isValid) {
        return reply({
          error: true,
          status: 401,
          message: 'Sessão não autorizada'
        })
          .code(401)
          .send()
      } else {
        Jwt.sign(
          {
            id: session.id
          },
          tokenKey,
          {
            expiresIn: '1h'
          },
          (err, token) => {
            if (err) {
              reply({
                error: true,
                status: 202,
                err: err,
                message: 'Sessão não autorizada'
              })
                .code(401)
                .send()
            }

            token = 'Bearer ' + token

            return reply({
              error: false,
              status: 202
            })
              .header('Authorization', token)
              .code(202)
              .send()
          }
        )
      }
    })
    .catch(err =>
      reply({
        error: true,
        status: 401,
        err: err,
        message: 'Sessão não autorizada'
      })
        .code(401)
        .send()
    )
}
