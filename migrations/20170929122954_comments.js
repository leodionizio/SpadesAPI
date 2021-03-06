'use strict'

exports.up = knex =>
  knex.schema.createTable('comments', table => {
    table.increments('id').primary()
    table.integer('user_id').references('id').inTable('users')
    table.string('text').notNullable()
    table.timestamps()
  })

exports.down = knex => knex.schema.dropTable('comments')
