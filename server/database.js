const { Pool, Client } = require("pg");

const credentials = {
  user: "znbfzhztgogqjp",
  host: "ec2-52-201-124-168.compute-1.amazonaws.com",
  database: "dakv864hep6lie",
  password: "05f0b48e826d0fc3c0d4c7ae63fba0cab4c84b58479e44ca789cfbdaf7ff05e7",
  port: 5432,
};

// Connect with a connection pool.

async function poolDemo() {
  const pool = new Pool(credentials);
  const now = await pool.query("SELECT NOW()");
  await pool.end();

  return now;
}

// Connect with a client.

async function clientDemo() {
  const client = new Client(credentials);
  await client.connect();
  const now = await client.query("SELECT NOW()");
  await client.end();

  return now;
}

// Use a self-calling function so we can use async / await.

(async () => {
  const poolResult = await poolDemo();
  console.log("Time with pool: " + poolResult.rows[0]["now"]);

  const clientResult = await clientDemo();
  console.log("Time with client: " + clientResult.rows[0]["now"]);
})();