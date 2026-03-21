import { Pool } from 'pg';

// Create a new pool of connections to the PostgreSQL database
export const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'hustle_hub',
  password: '123456',
  port: 5433, 
});

async function testConnection() {
  try {
    console.log("--- Connecting to The Hustle Hub ---");
    await pool.connect();
    
    // This query asks the DB for the current time
    const res = await pool.query('SELECT NOW()');
    
    console.log("Connection Successful!");
    console.log("Server Time:", res.rows[0].now);
    
  } catch (err) {
    console.error("Connection Failed!");
    console.error(err);
  } finally {
    await pool.end();
  }
}

//Connection test was successful, so we can comment it out to avoid unnecessary connections
//testConnection();