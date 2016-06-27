'use strict';
var mongoose = require("mongoose");
mongoose.connect("mongodb://127.0.0.1:27017/LMS");
var userSchema = mongoose.Schema({"name":{type:'string'},"email":{type:'string'},"add":{type:'string'},"dob":{type:'string'},"gender":{type:'string'},"pwd":{type:'string'},"repwd":{type:'string'}});
var regUser = mongoose.model("users", userSchema);
module.exports = regUser;
