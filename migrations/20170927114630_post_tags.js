exports.up = knex =>
  knex.schema.createTable('post_tags', table => {
    table.increments('id').primary()
    table.integer('post_id').references('id').inTable('posts')
    table.string('tag', 15).notNullable()
    table.timestamps()
  })

exports.down = knex => knex.schema.dropTable('post_tags')
