(function () {

  'use strict';

  require('angular');
  require('angular-route');
  require('angular-animate');
  var page1ctrl = require('./controllers/page1ctrl.js');
  var page2ctrl = require('./controllers/page2ctrl.js');
  var homectrl = require('./controllers/home.js');

  angular.module('SampleApp', ['ngRoute', 'ngAnimate'])

  .config([
    '$locationProvider',
    '$routeProvider',
    function($locationProvider, $routeProvider) {

      // routes
      $routeProvider
      .when("/", {
        templateUrl: "./partials/home.html",
        controller: "homeController"
      })
      .when("/page1", {
        templateUrl: "./partials/partial1.html",
        controller: "page1Controller"
      })
      .when("/page2", {
        templateUrl: "./partials/partial2.html",
        controller: "page2Controller"
      })
      .otherwise({
       redirectTo: '/'
     });
    }

    ])

  //Load controller
  .controller('page1Controller', ['$scope', page1ctrl])
  
  .controller('page2Controller', ['$scope', page2ctrl])
  
  .controller('homeController', ['$scope', homectrl]);

}());