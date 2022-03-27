const { Pool } = require('pg');

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'clinica-veterinaria',
  password: 'admin',
  port: 5432,
});

pool.connect((err, client, release) => {
  if (err) {
    return console.error('Error acquiring client', err.stack)
  }
  client.query('SELECT NOW()', (err, result) => {
    release()
    if (err) {
      return console.error('Error executing query', err.stack)
    }
    console.log(result.rows)
  })
})