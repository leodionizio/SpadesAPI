'use strict'

exports.up = knex =>
  knex.schema.createTable('comment_answer', table => {
    table.increments('id').primary()
    table.integer('user_id').references('id').inTable('users')
    table.integer('comment_id').references('id').inTable('comments')
    table.string('text').notNullable()
    table.timestamps()
  })

exports.down = knex => knex.schema.dropTable('comment_answer')
