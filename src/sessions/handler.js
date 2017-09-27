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
    .then((isValid) => {
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
              status: 202,
              message: 'Session authorized',
              data: token
            }).header('Authorization', token).code(200).send()
          }
        )
      }
    })
    .catch((err) => Boom.unauthorized('Sua sessão não pode ser autorizada!'))
}
