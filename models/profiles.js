'use strict'

let Profile = require('./profiles')
let User = require('./users')
let db = require('../libs/db')

module.exports = db.Model.extend({
  tableName: 'profiles',
  uuid: true,
  hasTimestamps : true,
  user: () => {
    this.belongsTo(User, 'user_id')
  }
})
