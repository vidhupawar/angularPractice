'use strict';

function checkLogin(userid,pwd,respns)
{

  console.log("in userdao checklogin");
  var user=require('./commondb');
  user.find({'userid':userid,'pwd':pwd},function(error,docs)
  {
    if(error)
    {
      respns.send("fail")
    }
    else
    if(docs && docs.length>0)
    {
      console.log('find',docs);
      respns.json(docs);

    }
    else {
      console.log("not found..");
      respns.send("invalid");
    }
  });
}
module.exports=checkLogin;

