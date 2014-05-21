'use strict';

/* Directives */

angular.module('portalng.directives', []).
  directive('portalng', ['$http', '$compile', function ($http, $compile) {
    return {
      restrict: "E",
      transclude: true,
      template:"<div ng-transclude></div>",
      scope:{},
      link: function(scope, iElement, iAttrs, controller, transcludeFn){
        scope.apiVersion = "1.0";
        $http.get(iAttrs.portalUrl + "/layout").success(function(data){
          iElement.replaceWith($compile(data, transcludeFn)(scope));
          $http.get(iAttrs.portalUrl + "/api/" + scope.apiVersion + "/applet").success(function(data){
            scope.apps = data;
          }).error(function(){
            return;
          });
        }).error(function(){
          return;
        });        
      }
    };
  }]).
  config(['$httpProvider', function($httpProvider) {
        $httpProvider.defaults.useXDomain = true;
        delete $httpProvider.defaults.headers.common['X-Requested-With'];
    }
  ]);
