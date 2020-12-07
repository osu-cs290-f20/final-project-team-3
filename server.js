
var path = require('path');
var express = require('express');
var app = express();
let ehbrs = require('express-handlebars');
var port = process.env.PORT || 3000;
let userData = require('./userData.json');

app.engine('handlebars', ehbrs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.use(express.static('public'));



app.get('/', function(req,res,next){
    res.status(200).render('infoContainer', {
        userInfo: userData,
        flag : true,
    });
});

app.listen(port, function () {
    console.log("== Server is listening on port", port);
  });
  