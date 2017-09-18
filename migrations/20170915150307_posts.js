'use strict'

exports.up = knex =>
knex.schema.createTable('posts', table => {
  table.uuid('id').primary()
  table.string('title').notNullable()
  table.string('content').notNullable()
  table.string('tags')
  // table.uuid('id').references('users.id')
  table.timestamps()
})

exports.down = knex => knex.dropTable('users')
