exports.up = knex =>
  knex.createTable('post_tags', table => {
    table.uuid('id')
    table.integer('id_post').references('posts')
    table.string('tag', 15).notNullable()
  })

exports.down = knex => knex.dropTable('post_tags')
