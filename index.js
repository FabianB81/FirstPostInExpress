
var express = require('express');
var myParser = require("body-parser");
var app = express();

app.set('view engine', 'pug');
app.use(myParser.urlencoded({extended : true}));

//Get
app.get("/",function(req,res){
  res.render("form");
});

//Post to page
 app.post('/', function(req,res){
 	res.render("page", { user: req.body.user });
 });

app.listen(8080);
