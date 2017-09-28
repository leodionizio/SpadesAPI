exports.up = knex => knex.schema.createTable('user_phrases', table => {
  table.uuid('id')
  table.uuid('user_id').references('users')
  table.string('p1').notNullable()
  table.string('p2').notNullable()
  table.string('p3')
})

exports.down = (knex) => knex.dropTable('user_phrases')
