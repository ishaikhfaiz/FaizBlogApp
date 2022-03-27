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

const Sequelize = require('sequelize');

const connectionString = process.env.DATABASE_URL;
const sequelize = new Sequelize(connectionString, {
  logging: false,
  dialect: 'postgres',
  dialectOptions: {
    ssl: true,
    rejectUnauthorized: false
  }
});
module.exports = sequelize;
