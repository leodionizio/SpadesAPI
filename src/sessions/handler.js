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
      if (isValid) {
        Jwt.sign(
          {
            id: session.id,
            email: session.email,
            user: session.user
          },
          tokenKey,
          {
            expiresIn: '1h'
          },
          (err, token) => {
            if (err) return Boom.unauthorized(err)
    
            token = 'Bearer '+ token          
            
            return reply({
              error: false,
              status: 202,
              message: 'Session authorized'
            })
              .header('Authorization', token)
              .code(202)
              .send()
          }
        )
      }
    })
    .catch(err => 
      reply(Boom.unauthorized('Sua sessão não pode ser autorizada!')))
      .code(401)
}
