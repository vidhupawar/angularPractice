'use strict';

function checkLogin(uid,pass,response){
  var User=require("./commondb");
  User.find({"userid":uid,"pwd":pass},function(error,docs){
    if(error){
      response.send("fail")
    }
    else if(docs && docs.length>0){

      console.log("+++++++++"+uid, "+++++"+pass,"------"+error);
      console.log("inside my docs"+docs);
     response.json(docs);

    }
    else {
      console.log("inside my docs"+docs);
      response.send("invalid");
    }
  });
}
module.exports=checkLogin;

