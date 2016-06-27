app.controller("myCtrl",['$scope','regFact',function($scope, regFact){
  console.log("in regctrl");
  $scope.regUser=function() {
    console.log("in reg user fn");
    var name=$scope.name;
    var email=$scope.email;
    var add=$scope.add;
    var dob=$scope.dob;
    var gender=$scope.gender;
    var pwd=$scope.pwd;
    var repwd=$scope.repwd;
    console.log("before promise");
    var promise=regFact.registerUser(name,email,add,dob,gender,pwd,repwd);
    console.log("data");
    promise.then(function(data){
      alert("registration successful");

    });
  }}]);
