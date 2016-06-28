'use strict';
app.factory('fctry',function($http,$q){
  console.log("before authenticate");
  var authenticateUser=function(userid,pwd){
    var defered=$q.defer();
    var mydata={
      userid:userid,
      pwd:pwd
    };
    console.log('my logindata is:',mydata);
    $http.post("login",mydata).success(function (data) {
      console.log("in factry post function");
      defered.resolve(data);
    }).error(function(er){
      alert("login error"+er);
      console.log("error",er);
      defered.reject(er);
    });

    return defered.promise;
  }
  return{"authenticateUser":authenticateUser};
});
app.factory('regFactory',function($http,$q){
  var registrationUser=function(id,email,fname,lname,add,dob,gender,mobile,pwd,rpwd){
    var defered=$q.defer();
    var regData={
      id:id,
      email:email,
      fname:fname,
      lname:lname,
      address:add,
      dob:dob,
      gen:gender,
      mobile:mobile,
      pwd:pwd,
      rpwd:rpwd
    };
    console.log("data is",regData);
    $http.post('register',regData).success(function(data) {
      defered.resolve(data);
    }).error(function(regerr){
      defered.reject(regerr);
    });
    return defered.promise;
  }
  return{"registrationUser":registrationUser};
});
