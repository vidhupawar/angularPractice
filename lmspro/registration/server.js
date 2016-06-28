'use strict';
var express=require("express");
var bodyParser=require("body-parser");
var app=express();
app.use(express.static("register"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post("/reg",function(req,res){
  console.log("in post function");
  var id = req.body.uid;
  var pass = req.body.pwd;
  var regDao = require("./register/scripts/db/regdao");
  console.log("require regdao");
  regDao(id,pass,res);
});
app.listen(2121,function(){
  console.log("Server Start......")
});

