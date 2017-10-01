
exports.up = (knex) => knex.schema.createTable('phones', (table)=>{
  table.increments('id').primary()
  table.string('country_code')
  table.string('regional_code')
  table.string('number')
  table.integer('user_id').references('id').inTable('users')
  table.timestamps()
})
  

exports.down = knex => knex.schema.dropTable('phones')
