var app=angular.module('myApp',[]);
app.directive('myCustom',function(){
  return{
    templateUrl:'directive.html'
  }
});

app.controller('myCtrl',['$scope',function($scope){
  $scope.msg='hello';
}]);
