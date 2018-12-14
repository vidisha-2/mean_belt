var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var mongoose = require('mongoose');
var session = require('express-session');
const flash = require('express-flash');

var app = express();

app.use(session({
  secret: 'keyboardkitteh',
  resave: false,
  saveUninitialized: true,
  cookie: { maxAge: 60000 }
}))
app.use(flash());
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, './static')));
// app.set('views', path.join(__dirname, './views'));
// app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public/dist/public'));
require('./server/routes')(app)

app.listen(1112, function(){
    console.log('Listening on port 1112');
})