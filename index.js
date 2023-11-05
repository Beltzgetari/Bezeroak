let express = require('express');
const path = require('path');
let app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(express.json());
app.listen( 3000, function() {
console.log("Zerbitzaria 3000 portuan entzuten");
 })

app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'))
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));


app.get("/", function(req, res) {
    res.render('index', {
    'izenburua': 'EJS probatzen',
    'bezeroak': bezeroak
    })
    });
 

let bezeroak =[];

app.post("/bezeroa/new", function (req, res) {
    bezeroak.push(req.body); // use req.body instead of req.params
    console.log(req.body);

    console.log(bezeroak);


    res.render('index', {
        'izenburua': 'EJS probatzen',
        'bezeroak': bezeroak
    });
});