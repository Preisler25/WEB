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
    res.render(path.join(__dirname, 'views', 'index.ejs'));
});

app.get('/tabicon', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'img', 'icon', 'tab-icon.png'));
});
//public/Style/plugins/font-awesome/css/all.min.css
app.get('/allmincss', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'Style', 'plugins','font-awesome','css', 'all.min.css'));
});
//public/Style/plugins/bootstrap/bootstrap.min.css
app.get('/bootstrapmincss', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'Style', 'plugins','bootstrap', 'bootstrap.min.css'));
});
//public/Style/plugins/magnific-popup.css
app.get('/magnificpopupcss', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'Style', 'plugins', 'magnific-popup.css'));
});
//public/Style/plugins/animate.css
app.get('/animatecss', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'Style', 'plugins', 'animate.css'));
});
//public/Style/plugins/slick-slider/slick.css
app.get('/slickcss', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'Style', 'plugins','slick-slider', 'slick.css'));
});
//public/Style/style.css
app.get('/stylecss', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'Style', 'style.css'));
});
//public/Style/responsive.css
app.get('/responsivecss', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'Style', 'responsive.css'));
});

app.get('/logo', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'img', 'logo', 'logo.svg'));
});
//assets/img/hero/4/1.png
app.get('/hero1', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'img', 'hero', '4', '1.png'));
});
//assets/js/jquery.min.js
app.get('/jqueryminjs', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'js', 'jquery.min.js'));
});
//assets/js/popper.min.js
app.get('/popperminjs', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'js', 'popper.min.js'));
});
//assets/js/bootstrap.min.js
app.get('/bootstrapminjs', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'js', 'bootstrap.min.js'));
});
//assets/js/waypoints.min.js
app.get('/waypointsminjs', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'js', 'waypoints.min.js'));
});
//assets/js/jquery.counterup.js
app.get('/counterupjs', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'js', 'jquery.counterup.js'));
});
//assets/js/magnific-popup.min.js
app.get('/magnificpopupminjs', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'js', 'magnific-popup.min.js'));
});
//assets/js/wow.min.js
app.get('/wowminjs', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'js', 'wow.min.js'));
});
//assets/js/parallax.min.js
app.get('/parallaxminjs', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'js', 'parallax.min.js'));
});
//assets/js/slick.min.js
app.get('/slickminjs', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'js', 'slick.min.js'));
});
//assets/js/magnet-mouse.min.js
app.get('/magnetmouseminjs', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'js', 'magnet-mouse.min.js'));
});
//assets/js/jquery-ui.js
app.get('/jqueryuijs', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'js', 'jquery-ui.js'));
});
app.get('/jquerycounterupjs', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'js', 'jquery.counterup.js'));
});
//assets/js/main.js
app.get('/mainjs', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'js', 'main.js'));
});

app.listen(3000, () => {
  console.log('Server started on port 3000');
});