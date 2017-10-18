
module.exports = {
  development: {
    client : 'pg',
    connection : `pg://${process.env.DB_USER}:${process.env.DB_USER}@${process.env.DB_ENDPOINT}/${process.env.DB}`
  },
  production: {
    client : 'pg',
    connection : ''
  }
}