'use strict'

let Profile = require('./profiles')

module.exports = db.Model.extend({
  tableName: 'profiles',
  hasTimestamps : true
})
