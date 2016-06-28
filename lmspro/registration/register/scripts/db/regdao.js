'use strict';
function regDao(regid,pwd,response){
  console.log("i m in reguser function");
  console.log('In regdao userid:',regid);
  var regdb=require("./commond");
  var reg=new regdb({id:regid,pwd:pwd},function(error,docs){
    if(error){
      console.log("reg fail");
      response.send("fail");
    }
    else if (docs){
      console.log("docs");
      response.send('success');
    }
    else {
      console.log("invalid");
      response.send("invalid");
    }
  });
  reg.save();
}

module.exports=regDao;
