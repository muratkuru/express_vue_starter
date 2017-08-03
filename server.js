var join = require('path').join;
var express = require("express");
var app = express();
var port = 8080;

app.use(express.static(join(__dirname, 'public')));

app.get('/', function(req, res){
    res.sendFile('index.html');
});

app.listen(port, function(){ console.log(port) });