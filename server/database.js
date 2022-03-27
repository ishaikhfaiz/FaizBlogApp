const Client = require('pg')

const client = new Client({
  host: 'ec2-52-201-124-168.compute-1.amazonaws.com',
  user: 'znbfzhztgogqjp',
  port: '5432',
  password: '05f0b48e826d0fc3c0d4c7ae63fba0cab4c84b58479e44ca789cfbdaf7ff05e7',
  database: 'dakv864hep6lie'
}) 

client.connect();