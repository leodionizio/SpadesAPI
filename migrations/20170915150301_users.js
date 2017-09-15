'use strict'

exports.up = knex =>
knex.schema.createTable('users', table => {
  table.uuid('id').primary()
  table
    .string('email')
    .unique()
    .notNullable()
  table.string('password').notNullable()
  table
    .string('user')
    .unique()
    .notNullable()
  table.dateTime('born_at')
  table.timestamps()
})

exports.down = knex => knex.dropTable('users')
