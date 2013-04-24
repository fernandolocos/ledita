'use strict';


// Declare app level module which depends on filters, and services
angular.module('ledita', ['ledita.filters', 'ledita.services', 'ledita.directives', 'ledita.controllers']).
  config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/register', {templateUrl: 'views/register.html', controller: 'RegisterCtrl'});
    //$routeProvider.when('/view2', {templateUrl: 'views/partial2.html', controller: 'MyCtrl2'});
    $routeProvider.otherwise({redirectTo: '/'});
  }]);
