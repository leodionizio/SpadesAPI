'use strict'

let Joi = require('joi')
let handler = require('./handler')

module.exports = [
  {
    method: 'POST',
    path: '/api/v1/posts',
    handler: handler.create,
    config: {
      validate: {
        payload: Joi.object({
          title: Joi.string().required(),
          content: Joi.string().required(),
          tags: Joi.string()
        })
      }
    }
  },
  {
    path: '/api/v1/posts',
    method: 'GET',
    handler: handler.getPosts
  }
]
