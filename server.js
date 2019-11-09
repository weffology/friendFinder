//declare dependencies
var express = require("express");
var path = require("path");
var app = express();
var PORT = process.env.PORT || 3000;
var friends = [];

app.use(express.static(__dirname+"/public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });

module.exports = path;