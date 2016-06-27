'use strict';
function checkRegister(name,email,add,dob,gender,pwd,repwd,response){
  console.log("in regdao");
  var regUser=require("./regcdb");
  var reg = new regUser({"name":name,"email":email,"add":add,"dob":dob,"gender":gender,"pwd":pwd,"repwd":repwd},
    function(error,docs){
      if(error){
        response.send("fail");
      }
      else if(docs){
        console.log("docs regdao"+docs);
        response.send("success");

      }
      else{
        response.send("invalid");
      }
    }
  );
  reg.save();
}
module.exports=checkRegister;
