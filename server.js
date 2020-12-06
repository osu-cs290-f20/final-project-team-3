
var path = require('path');
var express = require('express');
var app = express();
let ehbrs = require('express-handlebars');
var port = process.env.PORT || 3000;


app.engine('handlebars', ehbrs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.use(express.static('public'));


let name = "Nawaf AlOthman"
let level = "16"
let maxExp = 500;
let currExp = 400;
let context = {
    name: name,
    level: level,
    maxExp: maxExp,
    currExp: currExp,
}
//let flag = true;

app.get('/', function(req,res,next){
    res.status(200).render('infoContainer', {
        context: context,
        flag : true,
    });
});

app.listen(port, function () {
    console.log("== Server is listening on port", port);
  });
  