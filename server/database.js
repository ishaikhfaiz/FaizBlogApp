const { Pool } = require('pg');

const pool = new Pool({
  user: 'znbfzhztgogqjp',
  host: 'ec2-52-201-124-168.compute-1.amazonaws.com',
  database: 'dakv864hep6lie',
  password: '05f0b48e826d0fc3c0d4c7ae63fba0cab4c84b58479e44ca789cfbdaf7ff05e7',
  port: 5432,
});

pool.connect((err, client, release) => {
  if (err) {
    return console.error('Error acquiring client', err.stack)
  }
});

const { Sequelize } = require('sequelize');
const sequelize = new Sequelize();
module.exports = sequelize;


