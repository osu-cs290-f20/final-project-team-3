var handlebars = require('handlebars');
var express = require('express');
var bodyParser = require('body-parser');
var fs = require('fs');
var exphbs = require('express-handlebars');
//var path = require('path'); Maybe won't need

var questsData = require('./questsData');

var app = express();
var port = process.env.PORT || 3459;

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.static('public'));

app.get('/', function(req, res, next){
	res.status(200).render('mainPage');
})

app.post('/', function(req, res, next){
	if(req.body && req.body.desc && req.body.date){
		questsData.push({
			desc: req.body.desc,
			data: req.body.date
		})
		console.log("Data to add:", questsData);
		fs.writeFile(
			__dirname + '/questsData.json',
			JSON.stringify(questsData, null, 2),
			function (err, data) {
	          if (err) {
	            console.log("  -- err:", err);
	            res.status(500).send("Error saving quest in dc");
	          } 
	          else {
	            res.status(200).send("Quest added succesfully")
	          }
	        }
		);
	}
	else
		res.status(400).send("Error with data");
});

app.listen(port, function(){
	console.log("Listening on port: ", port);
})