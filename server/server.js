const express = require('express')
    , bodyParser = require('body-parser')
    , cors = require('cors')
    , massive = require('massive')
    , port = 4000
    , session = require('express-session')
    , auth = require('./controllers/authController')
    , CheckForSession = require('../middleware/CheckForSession')
    , controller = require('./controllers/controller.js')
    app = express();



require('dotenv').config();

app.use(bodyParser.json());
app.use(cors());
app.use(session({
    secret: process.env.SECRET, 
    resave: false, 
    saveUninitialized: true
}))
app.use(CheckForSession);

//AUTHORIZATION 
app.post('/api/auth/login', auth.login);
app.post('/api/auth/register', auth.register);
app.get('/api/getHouses', controller.getHouses);
// sim3: 75D
app.post('/api/addHouse', function(req,res,next){
    if (req.body.userid<=5){//an admin will have a userid less than or equal to 5
        next()
    }
    else{
        res.status(403)
    }
}, controller.addHouse);

massive (process.env.CONNECTION_STRING).then(db=> {
    app.set('db', db);
    app.listen(port, ()=>console.log('Big Brother is listening on port 4000'));
})


