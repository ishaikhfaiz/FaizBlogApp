const { Client } = require('pg')
const client = new Client()
client.connect(err => {
  if (err) {
    console.error('connection error', err.stack)
  } else {
    console.log('connected')
  }
})

const { Sequelize } = require('sequelize');
const sequelize = new Sequelize({
  dialect: 'postgres'
});
module.exports = sequelize;


