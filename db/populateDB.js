const { Client } = require("pg");
require("dotenv").config({ path: "db.env" });

const SQL = `
DROP TABLE IF EXISTS messages;

CREATE TABLE IF NOT EXISTS messages (
  id SERIAL PRIMARY KEY,
  text TEXT NOT NULL,
  "username" VARCHAR(50) NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO messages (text, "username") VALUES
  ('Welcome to the message board!', 'Sara'),
  ('Are these messages real?', 'Tom'),
  ('No, this is all scripted...', 'Cam');
`;

async function main() {
  console.log("Seeding database...");
  const client = new Client({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT,
  });


  await client.connect();
  await client.query(SQL);
  await client.end();
  console.log("Database seeded successfully!");
}

main();
