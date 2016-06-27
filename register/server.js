'use strict';
var express = require("express");
var bodyParser = require("body-parser");
var app = express();
app.use(express.static("app"));
app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());

app.post("/register",function(req,res){
  var name = req.body.name;
  var email = req.body.name;
  var add = req.body.add;
  var dob = req.body.dob;
  var gender = req.body.gender;
  var pwd = req.body.pwd;
  var repwd = req.body.repwd;
  console.log("in server");
  var checkRegister = require("./app/scripts/server/regdao");
  checkRegister(name,email,add,dob,gender,pwd,repwd,res);
  res.send("success");

});
app.listen(2121,function(){
  console.log("server start at 2121");
});
