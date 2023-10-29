const express = require('express');
const path = require('path');
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'))
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));


app.get("/", function(req, res) {
    res.render('index', {'izenburua': 'EJS probatzen'})
    });

app.get("/", (req, res) => {
    res.render('index');
});