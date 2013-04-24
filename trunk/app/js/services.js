'use strict';

/* Services */


// Demonstrate how to register services
// In this case it is a simple value service.
angular.module('ledita.services', []).
  value('version', '0.1');
/*
angular.module('ledita.services', []).
function ($resource) {
	return $resource('api/user/:userId', {}, {
    update: {method:'PUT'}
});*/
