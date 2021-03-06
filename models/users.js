'use strict'

let Post = require('./posts')
let db = require('../libs/db')

module.exports = db.Model.extend({
  tableName: 'users',
  hasTimestamps : true,
  bcrypt: { field : 'password'},
  hidden : ['password']
  //posts: () => this.hasMany(Post)
})
