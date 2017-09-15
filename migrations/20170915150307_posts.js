'use strict'

exports.up = knex =>
knex.schema.createTable('users', table => {
  table.uuid('id').primary()
  table.string('title', 70).notNullable()
  table.string('content').notNullable()
  table.string('tags')
  table.integer('id_user').notNullable().references('id').inTable('users')
  table.timestamps()
})

exports.down = knex => knex.dropTable('users')
