let express = require('express');
const path = require('path');
let app = express();
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


app.get("/", (req, res) => {
    res.render('index');
});

let bezeroak = [
    {
    id: 1,
    izena: 'Ane',
    abizena: 'Uriarte',
    email: 'ane@ni.eus'
    },
    {
    id: 2,
    izena: 'Jon',
    abizena: 'Juanenea',
    email: 'jon@ni.eus'
    },
    {
    id: 3,
    izena: 'Oihane',
    abizena: 'Lete',
    email: 'oihane@ni.eus'
    },
    ]
/*
    app.get('/bezeroa', function(req, res){
        res.render('index', {
            'izenburua': 'EJS probatzen',
            'bezeroak': bezeroak
            })
    })*/
    app.post("/bezeroa/new", function (req, res) {
        let berri = {
            "id": bezeroak.length + 1,
            "izena": req.body.izena,
            "abizena": req.body.abizena,
            "email": req.body.email
        }
        bezeroak.push(berri);
        res.render('index', {
            'izenburua': 'EJS probatzen',
            'bezeroak': bezeroak
        })
        
    });
    app.get('/bezeroa/delete/:id', function(req, res){
        let bezeroId = parseInt(req.params.id); 
        let bezeroIndex = bezeroak.findIndex(bezero => bezero.id === bezeroId);

         if (bezeroIndex !== -1) {
    
            bezeroak.splice(bezeroIndex, 1);
            res.render('index', {
                'izenburua': 'EJS probatzen',
                'bezeroak': bezeroak
              });
        } else {
         res.status(404).send('Ez da aukitu bezerorik');
        }
    })
