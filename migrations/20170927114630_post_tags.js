exports.up = knex =>
  knex.createTable('post_tags', table => {
    table.increments('id').primary().serial()
    table.integer('id_post').references('posts')
    table.string('tag', 15).notNullable()
    table.timestamps()
  })

exports.down = knex => knex.dropTable('post_tags')
