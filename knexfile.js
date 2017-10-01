
module.exports = {
  development: {
    client : 'pg',
    connection : 'pg://douglas:douglas01@localhost/blog'
  },
  production: {
    client : 'pg',
    connection : ''
  }
}