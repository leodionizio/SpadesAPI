exports.up = knex =>
  knex.schema.createTable('profiles', table => {
    table.increments('id').primary().serial()
    table.integer('user_id').references('users.id')
    table.string('description')
    table.string('last_work')
    table.string('last_school')
    table.string('bcg_color').notNullable()
    table.timestamps()
  })

exports.down = knex => knex.dropTable('profiles')
