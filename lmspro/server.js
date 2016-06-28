'use strict';
var express=require("express");
var bodyParser=require("body-parser");
var app=express();
app.use(express.static("app"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post("/login",function(req,res){
  var userid = req.body.userid;
  var pwd = req.body.pwd;
  console.log("************** Userid "+userid+" Password "+pwd);
  var checkLogin = require("./app/server/userdao");
  checkLogin(userid,pwd,res);
});
app.post("/register",function(req,res){
  console.log("in register post function");
  var id=req.body.id;
  var email=req.body.email;
  var fname=req.body.fname;
  var lname=req.body.lname;
  var add=req.body.address;
  var dob=req.body.dob;
  var gen=req.body.gen;
  var mobile=req.body.mobile;
  var pwd=req.body.pwd;
  var repass=req.body.rpwd;


  var checkRegister=require("./app/server/regdao");
  checkRegister(id,email,fname,lname,add,dob,gen,mobile,pwd,repass,res);
}) ;
app.listen(2222,function(){
  console.log("Server Start......")
});

