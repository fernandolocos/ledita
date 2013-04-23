'use strict';


// Declare app level module which depends on filters, and services
angular.module('ledita', ['ledita.filters', 'ledita.services', 'ledita.directives', 'ledita.controllers']).
  config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/register', {templateUrl: 'view/register.html', controller: 'MyCtrl1'});
    //$routeProvider.when('/view2', {templateUrl: 'view/partial2.html', controller: 'MyCtrl2'});
    $routeProvider.otherwise({redirectTo: '/'});
  }]);
