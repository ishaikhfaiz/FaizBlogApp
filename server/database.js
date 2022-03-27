const { Pool } = require('pg');

const pool = new Pool();

pool.on('error', (err, client) => {
  console.error('Unexpected error on idle client', err);
  process.exit(-1);
});

pool.on('connect', (err, client) => {
  if (err) console.error(err);
  console.log(client);
  console.log('Successfully connected to postgres.');
});

const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(process.env.DATABSE_URL,{
  dialect: 'postgres',
  host: 'localhost',
  port: 5432,
  dialectOptions: {
    "ssl": {
      "require": true,
      "rejectUnauthorized": false
    }
  },
});

module.exports = sequelize;
