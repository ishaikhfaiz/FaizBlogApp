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

const sequelize = new Sequelize({
  database: "dakv864hep6lie",
  username: "znbfzhztgogqjp",
  password: "05f0b48e826d0fc3c0d4c7ae63fba0cab4c84b58479e44ca789cfbdaf7ff05e7",
  host: "ec2-52-201-124-168.compute-1.amazonaws.com",
  port: 5432,
  dialect: "postgres",
  dialectOptions: {
    ssl: {
      require: true, 
      rejectUnauthorized: false 
    }
  },
});
module.exports = sequelize;
