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
const sequelize = new Sequelize('postgres://znbfzhztgogqjp:05f0b48e826d0fc3c0d4c7ae63fba0cab4c84b58479e44ca789cfbdaf7ff05e7@ec2-52-201-124-168.compute-1.amazonaws.com:5432/dakv864hep6lie',{
  dialect: 'postgres'
});
module.exports = sequelize;


