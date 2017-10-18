'use strict'

let Hapi = require('hapi')
let Good = require('good')
require('dotenv').config()
let app = new Hapi.Server()

app.connection({
  port: process.env.PORT
})

app.register({
  register: require('hapi-router'),
  options: {
    routes: ['src/**/route.js']
  }
})

app.register(
  {
    register: Good,
    options: {
      reporters: {
        console: [
          {
            module: 'good-squeeze',
            name: 'Squeeze',
            args: [
              {
                response: '*',
                log: '*'
              }
            ]
          },
          {
            module: 'good-console'
          },
          'stdout'
        ]
      }
    }
  },
  err => {
    if (err) {
      throw err.message // something bad happened loading the plugin
    }

    app.start(err => {
      if (err) throw err.message

      app.log('Servidor rodando em: ', app.info.uri)
    })
  }
)
