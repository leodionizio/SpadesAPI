exports.up = knex =>
  knex.schema.createTable('profiles', table => {
    table.increments('id').primary()
    table.integer('user_id').references('id').inTable('users')
    table.string('description')
    table.string('last_work')
    table.string('last_school')
    table.string('bcg_color').notNullable()
    table.timestamps()
  })

exports.down = knex => knex.schema.dropTable('profiles')
