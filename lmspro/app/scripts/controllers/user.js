'use strict';
app.controller('ctrl' ,function($scope,fctry,$location,$localStorage){
  $scope.checkuser=function()
  {
    console.log("im in contrllr's checkuser function");
    var userid=$scope.userid;
    var pwd=$scope.pwd;
    var promise=fctry.authenticateUser(userid,pwd);
    promise.then(function(data)
    {
      $localStorage.afterdata=data;
      console.log("in localsstorage"+$localStorage.afterdata);
      if(data[0].userid==userid)
      {
        console.log("in success");
        location.href = "http://localhost:2222/views/dashboard.html";
      }
      else if(data=='invalid')
      {
        alert("invalid userid and password");
      }
      else {
        alert('fail');
      }
    },function(err)
    {
      alert("error",err);
    });
  }
});
app.controller('regCtrl',['$scope','regFactory', function($scope, regFactory){
  console.log("inregcontroller");
  $scope.regUser=function(){
    console.log("inreguser function");
    var id=$scope.id;
    var email=$scope.email;
    var fname=$scope.fname;
    var lname=$scope.lname;
    var add=$scope.add;
    var dob=$scope.dob;
    var gender=$scope.gender;
    var mobile=$scope.mobile;
    var pwd=$scope.pwd;
    var repass=$scope.repwd;
 var promise =regFactory.registrationUser(id,email,fname,lname,add,dob,gender,mobile,pwd,repass);
    promise.then(function(data){
    });
  }}]);


app.controller('dashCtrl',function($scope,$localStorage)
{
  $scope.data=$localStorage.afterdata;
  console.log('Data is:', $scope.data);
  $scope.firstname=$scope.data[0].fname;
  console.log('First name is:',$scope.firstname);
  $scope.lastname=$scope.data[0].lname;
  console.log('Last name is:',$scope.lastname);
  $scope.role=$scope.data[0].role;
  console.log('role is :',$scope.role);
  $scope.right=$scope.role.right;
  console.log('Right is:',$scope.right);
});


