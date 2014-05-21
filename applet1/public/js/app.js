'use strict';

// Declare app level module which depends on filters, and services

var myApp = angular.module('myApp', [
  'myApp.controllers',
  'myApp.filters',
  'myApp.services',
  'myApp.directives',
  'portalng.directives',
  'ui.router'
  ]);

myApp.config(function($stateProvider, $urlRouterProvider) {
  //
  // For any unmatched url, redirect to /state1
  $urlRouterProvider.otherwise("/state1");
  //
  // Now set up the states
  $stateProvider
  .state('state1', {
    url: "/state1",
    templateUrl: "partials/state1.html"
  })
  .state('state1.list', {
    url: "/list",
    templateUrl: "partials/state1.list.html",
    controller: function($scope) {
      $scope.items = ["A", "List", "Of", "Items"];
    }
  })
  .state('state2', {
    url: "/state2",
    templateUrl: "partials/state2.html"
  })
  .state('state2.list', {
    url: "/list",
    templateUrl: "partials/state2.list.html",
    controller: function($scope) {
      $scope.things = ["A", "Set", "Of", "Things"];
    }
  })
});
