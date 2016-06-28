var mongoose = require("mongoose");
mongoose.connect("mongodb://127.0.0.1:27017/LMS");
var Schema = mongoose.Schema;
var userSchema = new Schema({"id":{type:"string"},"pwd":{type:"string"}});
var regdb = mongoose.model("regdb",userSchema);
/*var entries = new regdb ({regId:'vidhu', regPass:'pawar'});
entries.save();*/
module.exports=regdb;

