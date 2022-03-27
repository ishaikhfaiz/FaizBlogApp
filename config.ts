module.exports = {
    development: {
      username: process.env.USER,
      password: process.env.PASSWORD,
      database: process.env.DATABASE,
      host: process.env.HOST,
      port: process.env.PORT,
    },
    test: {
      username: process.env.USER,
      password: process.env.PASSWORD,
      database: process.env.DATABASE,
      host: process.env.HOST,
      port: process.env.PORT,
    },
    production: {
      username: process.env.USER,
      password: process.env.PASSWORD,
      database: process.env.DATABASE,
      host: process.env.HOST,
      port: process.env.PORT,
    },
  };