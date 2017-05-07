var express=require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
const path= require('path');

//app setup
app.use(express.static(__dirname+'/client'));
app.use('/img', express.static(__dirname+'/client/img'));
app.use('/zadania', express.static(__dirname+'/client/documents'));
app.use(bodyParser.json());

app.get('/', function(req, res) {
  res.send('Witamy na stronie High School Business Challenge!');
});

//TODO: Create secure API end points for editing and replacing data
//NOTE: Couldn't find a way to properly use translate polish letters from MongoDB to front-end, so for now there is no DB
//TODO: Problem above should be easily fixed with SQL. Install it and move data from controllers to DB (!!!)

//DONE: http://stackoverflow.com/questions/9526500/node-js-how-can-i-remove-the-port-from-the-url
//NOTE: Using ip tables to redirect to proper port:
//http://stackoverflow.com/questions/16573668/best-practices-when-running-node-js-with-port-80-ubuntu-linode

app.listen(3000);
console.log('Express is running on port 3000');
