var handlebars = require('handlebars');
var express = require('express');
var bodyParser = require('body-parser');
var fs = require('fs');
//var path = require('path'); Maybe won't need

var questsData = require('./peopleData');

var app = express();
var port = process.env.PORT || 3459;

app.engine('handlebars', exphbs({ defaultLayout: null }));
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.static('public'));

app.get('/', function(req, res, next){
	res.render('../public/index')
})

app.post('/', function(req, res){
	if(req.body && req.body.title && req.body.desc && req.body.date){
		fs.writeFile(
			__dirname + '/questsData.JSON',
			JSON.stringify(peopleData, null, 2)
		)
		res.status(200).send("Quest added succesfully");
	}
	else
		res.status(400).send("Error with data");
})