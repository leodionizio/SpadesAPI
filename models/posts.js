'use strict'

let db = require('../libs/db')
let User = require('./users')

module.exports = db.Model.extend({
  tableName: 'posts',
  uuid: true,
  hasTimestamps : true,
  user: () => this.belongsTo(User)
  
})
