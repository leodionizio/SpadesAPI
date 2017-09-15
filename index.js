'use strict'

let Hapi = require('hapi')
let Good = require('good')

let app = new Hapi.Server()

app.connection({
  port: '3070',
  compression: true
})

app.register(
  {
    register: require('hapi-router'),
    options: {
      routes: 'src/**/*route.js'
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
      throw err // something bad happened loading the plugin
    }

    app.start(err => {
      if (err) throw err

      app.log('Servidor rodando em: ', app.info.uri)
    })
  }
)
