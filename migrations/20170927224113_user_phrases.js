exports.up = knex => knex.schema.createTable('user_phrases', table => {
  table.increments('id').primary()
  table.integer('user_id').references('id').inTable('users')
  table.string('p1').notNullable()
  table.string('p2').notNullable()
  table.string('p3')
  table.timestamps()
})

exports.down = knex => knex.schema.dropTable('user_phrases')
