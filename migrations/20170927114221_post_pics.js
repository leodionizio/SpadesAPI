'use strict'

exports.up = knex =>
  knex.schema.createTable('post_pics', table => {
    table.increments('id').primary()
    table.string('pic').notNullable()
    table.integer('post_id').references('id').inTable('posts')
    table.timestamps()
  })

exports.down = knex => knex.schema.dropTable('post_pics')
