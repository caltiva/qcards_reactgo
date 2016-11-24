module.exports = {
  development: {
    username: process.env.PGUSER || 'root',
    password: null,
    database: 'ReactWebpackNode',
    host: '127.0.0.1',
    dialect: 'mongodb'
  },
  test: {
    username: process.env.PGUSER || 'root',
    password: null,
    database: 'ReactWebpackNode',
    host: '127.0.0.1',
    dialect: 'mongodb'
  },
  production: {
    use_env_variable: 'POSTGRES_DB_URL',
    username: process.env.PGUSER || 'root',
    password: null,
    database: 'ReactWebpackNode',
    host: '127.0.0.1',
    dialect: 'mongodb'
  }
};
