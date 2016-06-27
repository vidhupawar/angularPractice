'use strict';
app.factory("regFact",function($http,$q){
  var registerUser=function(name,email,dob,add,gender,pwd,repwd){
    console.log("in factory fn");
    var defered=$q.defer();
    var regData={
      name:name,
      email:email,
      dob:dob,
      add:add,
      gender:gender,
      pwd:pwd,
      repwd:repwd
    };
    console.log("before http:",regData);
    $http.post('/register',regData).success(function(data){
      console.log("datafind"+data);
      defered.resolve(data);
    }).error(function(regerr){
      defered.reject(regerr);
    });
    return defered.promise;
  }
  return{registerUser:registerUser};
});
