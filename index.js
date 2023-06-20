import express from 'express';
import { createConnection } from 'mysql';
import cors from 'cors';
import axios from 'axios';
const app = express();
axios.defaults.headers.common['Access-Control-Allow-Origin'] = 'http://localhost:5173';

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:5173');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    next();
});
const connection = createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'dbs10189365',
});


connection.connect((err) => {
    if (err) throw err;
    console.log('Connected to the MySQL server!');
});

// Define your API endpoint to retrieve data from MySQL
app.get('/api/data', (req, res) => {
    const query = 'SELECT * FROM movietable';
    connection.query(query, (err, result) => {
        if (err) {
            console.error(err);
            res.status(500).json({ error: 'Internal Server Error' });
            return;
        }
        res.json(result);
    });
});

// Root path handler
// app.get('/', (req, res) => {
//   res.send('Hello, this is the root path!');
// });

app.listen(5000, () => {
    console.log('Server is listening on port 5000!');
});
