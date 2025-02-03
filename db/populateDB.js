#! /usr/bin/env node
const { Client } = require("pg");
require("dotenv").config();

const SQL = `
CREATE TABLE IF NOT EXISTS messages (
  id SERIAL PRIMARY KEY,
  text TEXT NOT NULL,
  user VARCHAR(50) NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO messages (text, user) VALUES
  ('Welcome to the message board!', 'Sara'),
  ('Are these messages real?', 'Tom'),
  ('No, this is all scripted...', 'Cam');
`;

async function main() {
  console.log("Seeding database...");
  const client = new Client({ connectionString: process.env.DATABASE_URL });
  await client.connect();
  await client.query(SQL);
  await client.end();
  console.log("Database seeded successfully!");
}

main();
