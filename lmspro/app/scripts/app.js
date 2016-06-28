"use strict";
var app=angular.module("lmsPro",['ngAnimate','ngStorage','ngRoute']);
app.config(function ($routeProvider) {
  $routeProvider
    .when('/courses', {
      templateUrl: 'viewcourse.html'})
}).config(function ($routeProvider) {
  $routeProvider
    .when('/videos', {
      templateUrl: 'viewvideo.html'})
}).config(function ($routeProvider) {
  $routeProvider
    .when('/assignments', {
      templateUrl: 'assignments.html'})
}).config(function ($routeProvider) {
  $routeProvider
    .when('/certificate', {
      templateUrl: 'certificate.html'})
}).config(function ($routeProvider) {
  $routeProvider
    .when('/test', {
      templateUrl: 'test.html'})
}).config(function ($routeProvider) {
  $routeProvider
    .when('/question', {
      templateUrl: 'test/question.html'})
}).config(function ($routeProvider) {
  $routeProvider
    .when('/two', {
      templateUrl: 'test/two.html'})
}).config(function ($routeProvider) {
  $routeProvider
    .when('/question', {
      templateUrl: 'test/question.html'})
});

