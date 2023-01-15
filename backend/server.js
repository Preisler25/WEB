const express = require('express');
const app = express();
const path = require('path');

const { Client } = require('pg');
const client = new Client({
    host: 'localhost',
    port: 5432,
    database: 'amm',
    user: 'postgres',
    password: 'admin'
});
client.connect();

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'Temp', 'index-4.ejs'));
});


app.listen(3000, () => {
  console.log('Server started on port 3000');
});