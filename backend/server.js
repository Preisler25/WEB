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
//client.connect();

app.set('view engine', 'ejs');
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
 //#endregion

//#region css
app.get('/allmincss', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'Style', 'plugins','font-awesome','css', 'all.min.css'));
});
app.get('/bootstrapmincss', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'Style', 'plugins','bootstrap', 'bootstrap.min.css'));
});
app.get('/magnificpopupcss', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'Style', 'plugins', 'magnific-popup.css'));
});
app.get('/animatecss', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'Style', 'plugins', 'animate.css'));
});
app.get('/slickcss', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'Style', 'plugins','slick-slider', 'slick.css'));
});
app.get('/stylecss', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'Style', 'style.css'));
});
app.get('/responsivecss', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'Style', 'responsive.css'));
});
//#endregion

//#region js
app.get('/jqueryminjs', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'js', 'jquery.min.js'));
});
app.get('/popperminjs', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'js', 'popper.min.js'));
});
app.get('/bootstrapminjs', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'js', 'bootstrap.min.js'));
});
app.get('/waypointsminjs', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'js', 'waypoints.min.js'));
});
app.get('/counterupjs', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'js', 'jquery.counterup.js'));
});
app.get('/magnificpopupminjs', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'js', 'magnific-popup.min.js'));
});
app.get('/wowminjs', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'js', 'wow.min.js'));
});
app.get('/parallaxminjs', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'js', 'parallax.min.js'));
});
app.get('/slickminjs', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'js', 'slick.min.js'));
});
app.get('/magnetmouseminjs', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'js', 'magnet-mouse.min.js'));
});
app.get('/jqueryuijs', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'js', 'jquery-ui.js'));
});
app.get('/jquerycounterupjs', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'js', 'jquery.counterup.js'));
});
app.get('/mainjs', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'js', 'main.js'));
});
//#endregion

//#region img
app.get('/logo', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'img', 'logo', 'logo.png'));
});
app.get('/logo2', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'img', 'logo', 'logo2.svg'));
});
app.get('/hero1', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'img', 'hero', '4', '1.png'));
});
app.get('/hero2', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'img', 'hero', '4', '2.png'));
});
app.get('/heroshape1', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'img', 'hero', 'shape', '4', '1.png'));
});
app.get('/heroshape2', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'img', 'hero', 'shape', '4', '2.png'));
});
app.get('/heroshape3', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'img', 'hero', 'shape', '4', '3.png'));
});
app.get('/offerbox4', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'img', 'icon', 'offer_box', '4.svg'));
});
app.get('/offerbox2', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'img', 'icon', 'offer_box', '2.svg'));
});
app.get('/offerbox1', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'img', 'icon', 'offer_box', '1.svg'));
});
app.get('/ctabg', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'img', 'cta', 'bg_2.png'));
});
app.get('/footer1', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'img', 'footer', '1.png'));
});
app.get('/footer2', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'img', 'footer', '2.png'));
});
app.get('/footer3', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'img', 'footer', '3.png'));
});
app.get('/clients1', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'img', 'clients', '1.png'));
});
app.get('/clients2', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'img', 'clients', '2.png'));
});
app.get('/clients3', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'img', 'clients', '3.png'));
});
app.get('/clients4', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'img', 'clients', '4.png'));
});
app.get('/clients5', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'img', 'clients', '5.png'));
});
app.get('/award', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'img', 'icon', 'award.png'));
});
app.get('/digitalagency', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'img', 'digital_agency.png'));
});
app.get('/shape1', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'img', 'project', 'shape', '1.png'));
});
app.get('/shape4', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'img', 'project', 'shape', '4.png'));
});
app.get('/shape3', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'img', 'project', 'shape', '3.png'));
});
app.get('/project4', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'img', 'project', '4.png'));
});
app.get('/project3', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'img', 'project', '3.png'));
});
app.get('/project2', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'img', 'project', '2.png'));
});
app.get('/project1', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'img', 'project', '1.png'));
});
app.get('/videobg', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'img', 'video_bg.png'));
});
//#endregion

//#region font
app.get('/font1', (req, res) => {
  res.sendFile(path.join(__dirname, 'public','Style', 'plugins','font-awesome', 'webfonts', 'fa-solid-900.woff2'));
});
app.get('/font2', (req, res) => {
  res.sendFile(path.join(__dirname, 'public','Style', 'plugins','font-awesome', 'webfonts', 'fa-brands-400.woff2'));
});
app.get('/font3', (req, res) => {
  res.sendFile(path.join(__dirname, 'public','fonts', 'ClashDisplay-Semibold.ttf'));
});
//#endregion

//#region app
app.listen(3000, () => {
  console.log('Server started on port 3000');
});
//#endregion