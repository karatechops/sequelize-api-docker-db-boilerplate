require('dotenv').config();

module.exports = {
  development: {
    username: process.env.DB_USER,
    password: process.env.DB_PW,
    database: 'database_development',
    host: '127.0.0.1',
    dialect: 'postgres',
    operatorsAliases: false,
  },
  test: {
    username: 'postgres',
    password: null,
    database: 'database_test',
    host: '127.0.0.1',
    dialect: 'postgres',
    operatorsAliases: false,
  },
  production: {
    username: 'postgres',
    password: null,
    database: 'database_production',
    host: '127.0.0.1',
    dialect: 'postgres',
    operatorsAliases: false,
  },
};
