'use strict';
app.factory('fact',function($http,$q){
  var regUser=function(uid,pwd){
    var defered=$q.defer();
    console.log("in defer");
    var regData={
      uid:uid,
    pwd:pwd
    };
    console.log("in regData",regData);
    $http.post('reg',regData).success(function(data) {
      console.log("data function");
      defered.resolve(data);
    }).error(function(er){
      console.log("in error function");
      defered.reject(er);
    });
    return defered.promise;
  }
  return{"regUser":regUser};
});
