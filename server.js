var handlebars = require('handlebars');
var express = require('express');
var bodyParser = require('body-parser');

var app = express();
var port = process.env.PORT || 3459;

app.engine('handlebars', exphbs({ defaultLayout: null }));
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.static('public'));