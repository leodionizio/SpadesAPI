'use strict'

exports.up = knex =>
knex.schema.createTable('posts', table => {
  table.increments('id').primary()
  table.string('title').notNullable()
  table.string('content').notNullable()
  table.integer('user_id').references('id').inTable('users')
  table.timestamps()
})

exports.down = knex => knex.schema.dropTable('posts')
