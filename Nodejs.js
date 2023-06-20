import express from 'express';
import mysql from 'mysql';

const app = express();
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'test',
});

connection.connect((err) => {
  if (err) throw err;
  console.log('Connected to the MySQL server!');
});

// Define your API endpoint to retrieve data from MySQL
app.get('/api/data', (req, res) => {
  const query = 'SELECT * FROM movietest';
  connection.query(query, (err, result) => {
    if (err) throw err;
    res.send(result);
  });
});

// Root path handler
// app.get('/', (req, res) => {
//   res.send('Hello, this is the root path!');
// });

app.listen(3001, () => {
  console.log('Server is listening on port 3001!');
});
