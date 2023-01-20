const express = require('express');
const app = express();
const path = require('path');
const main = require('./modules/main');
const admin = require('./modules/admin');
const db = require('./modules/db');

const { Client } = require('pg');
const client = new Client({
    host: 'localhost',
    port: 5432,
    database: 'bmb',
    user: 'postgres',
    password: 'admin'
});
client.connect();
//app.use(express.static(path.join(__dirname, 'public')));

app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: false }));


//#region html
app.get('/', (req, res) => {
    res.render(path.join(__dirname, 'views', 'index.ejs'));
});
app.get('/about', (req, res) => {
    res.render(path.join(__dirname, 'views', 'about-us.ejs'));
});
app.get('/contact', (req, res) => {
    res.render(path.join(__dirname, 'views', 'contact.ejs'));
});
app.get('/pricing', (req, res) => {
    res.render(path.join(__dirname, 'views', 'pricing.ejs'));
});
app.get('/services', (req, res) => {
    res.render(path.join(__dirname, 'views', 'service.ejs'));
});
app.get('/single', (req, res) => {
    res.render(path.join(__dirname, 'views', 'single-service.ejs'));
});
app.get('/team', (req, res) => {
    res.render(path.join(__dirname, 'views', 'team.ejs'));
});
app.get('/admin', (req, res) => {
    res.render(path.join(__dirname, 'views', 'admin.ejs'));
});
//#endregion
app.post('/login', (req, res) => {
    if (admin.test(req.body)) {
        res.send(db.getAll(client))
    } else {
        res.redirect('/')
    }
});

app.post('/api', (req, res) => {
    db.save(req.body, client)
    res.redirect('/about')
});

//#region app
app.listen(3000, () => {
  console.log('Server started on port 3000');
});
//#endregion