const { Pool, Client } = require('pg')
const connectionString = 'postgres://znbfzhztgogqjp:05f0b48e826d0fc3c0d4c7ae63fba0cab4c84b58479e44ca789cfbdaf7ff05e7@ec2-52-201-124-168.compute-1.amazonaws.com:5432/dakv864hep6lie'
const pool = new Pool({
  connectionString,
})
pool.query('SELECT NOW()', (err, res) => {
  console.log(err, res)
  pool.end()
})
const client = new Client({
  connectionString,
})
client.connect()
client.query('SELECT NOW()', (err, res) => {
  console.log(err, res)
  client.end()
})