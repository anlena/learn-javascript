var express = require('express');
var app = express();

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

var routes = require('./routes/index.js')(app);
app.listen(3000);