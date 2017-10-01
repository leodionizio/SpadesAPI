'use strict'

exports.up = knex =>
  knex.schema.createTableIfNotExists('users', table => {
    table
      .increments('id')
      .primary()
    table.string('name').notNullable()
    table.string('surname').notNullable()
    table
      .string('email')
      .unique()
      .notNullable()
    table.string('password').notNullable()
    table
      .string('user')
      .unique()
      .notNullable()
    table.boolean('admin').default(false)
    table.timestamps()
  })

exports.down = knex => knex.schema.dropTable('users')
