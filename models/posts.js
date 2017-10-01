'use strict'

let db = require('../libs/db')
// let User = require('./users')

module.exports = db.Model.extend({
  tableName: 'posts',
  hasTimestamps : true
  // user: () => this.belongsTo(User)
  
})
