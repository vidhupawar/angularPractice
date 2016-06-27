'use strict';
var app = angular.module("myApp",[]);
/*/!*app.directive('confirmValidation', function () {
  return {
    require: 'ngModel',
    link: function (scope, elm, attrs, ctl) {
      scope.$watch(attrs['confirmValidation'], function (errorMsg) {
        elm[0].setCustomValidity(errorMsg);
        ctl.$setValidity('confirmValidation', errorMsg ? false : true);
      });
    }
  };
});*!/
app.directive('equal', function() {
  return {
    require: 'ngModel',
    link: function(scope, elm, attrs, ctrl) {

      scope.$watch(attrs.equal, function (newValue) {
        if (ctrl && ctrl.$modelValue) {
          if (newValue === ctrl.$modelValue) {
            ctrl.$setValidity('equal', true);
            // return newValue;
          } else {
            ctrl.$setValidity('equal', false);
            // return undefined;
          }
        }
      });

      ctrl.$parsers.unshift(function(viewValue) {
        if (viewValue) {
          if (viewValue === scope.$eval(attrs.equal)) {
            ctrl.$setValidity('equal', true);
            return viewValue;
          } else {
            ctrl.$setValidity('equal', false);
            return undefined;
          }
        } else {
          ctrl.$setValidity('equal', true);
          return viewValue;
        }
      });
    }
  };
});*/
