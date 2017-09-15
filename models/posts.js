'use strict'

let db = require('../libs/db')

module.exports = db.Model.extend({
  tableName: 'posts',
  uuid: true,
  hasTimestamps : true
})
