const { Pool } = require("pg");
require("dotenv").config({ path: "db.env" }); 

// module.exports = new Pool({
//     host: process.env.DB_HOST,
//     user: process.env.DB_USER,
//     password: process.env.DB_PASSWORD,
//     database: process.env.DB_NAME,
//     port: process.env.DB_PORT,
//   });

const pool = new Pool({
    user: 'tangwai',
    host: 'localhost',
    database: 'mini_message_board',
    password: 'tangwai-examples', 
    port: 5432,
});

pool.connect()
  .then(() => console.log('Connected to PostgreSQL!'))
  .catch(err => console.error('Database connection error:', err));

module.exports = pool;