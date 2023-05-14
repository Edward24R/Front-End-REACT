const express = require('express');
const cors = require('cors');
const { Pool } = require('pg');

const app = express();
app.use(cors());

const pool = new Pool({
  user: 'potgres',
  host: 'localhost',
  database: 'Parkwise Test',
  password: 'parkwise1234',
  port: 5432, 
});

app.get('/data', async (req, res) => {
  try {
    const client = await pool.connect();
    const result = await client.query('SELECT name, condition FROM your_table');
    const data = result.rows;
    res.json(data);
    client.release();
  } catch (error) {
    console.error('Error retrieving data:', error);
    res.status(500).send('Error retrieving data');
  }
});

app.listen(3001, () => {
  console.log('Server listening on port 3001');
});
