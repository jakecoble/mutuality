const dotenv = require('dotenv');
dotenv.config();

module.exports = {
  development: {
    username: 'mutuality_dev',
    password: 'mutuality_dev',
    database: 'mutuality_dev',
    host: '127.0.0.1',
    dialect: 'postgres'
  },

  production: {
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    dialect: 'postgres'
  }
};
