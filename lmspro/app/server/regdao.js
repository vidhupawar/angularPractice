'use strict';

function checkRegister(id,email,fname,lname,add,dob,gen,mobile,pwd,rpwd,response){
  var RegUser=require("./regcdb");
  var reg=new RegUser({userid:id,email:email,fname:fname,lname:lname,
  add:add,dob:dob,gender:gen,mobile:mobile,pwd:pwd,repass:rpwd,
      role:{rolename:'Student',right:
        [
          {rightname:'VIEW COURSES',link:'#/courses'},
          {rightname:'ASSIGNMENTS',link:'#/assignments'},
          {rightname:'WATCH VIDEO',link:'#/videos'},
          {rightname:'GIVE TEST',link:'#test'},
          {rightname:'CERTIFICATION',link:'#/certificate'}
        ]
      }
  },
    function(error,docs){
    if(error){
      response.send("fail")
    }
    else if(docs){
      console.log("inside my docs"+docs);
      response.send("success");

    }
    else {
      console.log("inside my docs"+docs);
      response.send("invalid");
    }
  });
  console.log('reg in dao is:',reg);
  reg.save();
}
module.exports=checkRegister;

