'use strict'

exports.up = knex => {
  table.createTable('comments', (table)=>{
    table.increments('id').primary().serial()
    table.string('text').notNullable()
    table.integer('post_id').references('post.id')
    table.timestamps()
  })
}

exports.down = knex => knex.dropTable('comments')
