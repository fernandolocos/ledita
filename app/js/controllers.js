'use strict';

/* Controllers */
/*
function RegisterCtrl(User) {
	  
	this.user = User.get({userId:this.params.userId});
	
	this.addUser = function () {
	    if (this.user.id > 0)
	        this.user.$update({userId:this.user.id});
	    else
	        this.user.$save();
	    window.location = "#/register";
	}
}
*/


angular.module('ledita.controllers', []).
  controller('RegisterCtrl', [function() {

  }])
  .controller('MyCtrl2', [function() {

  }]);
 /*
function RouteCtrl($route) {

    var self = this;

    $route.when('/wines', {template:'tpl/welcome.html'});

    $route.when('/wines/:wineId', {template:'tpl/wine-details.html', controller:WineDetailCtrl});

    $route.otherwise({redirectTo:'/wines'});

    $route.onChange(function () {
        self.params = $route.current.params;
    });

    $route.parent(this);

    this.addWine = function () {
        window.location = "#/wines/add";
    };

}

function WineListCtrl(Wine) {

    this.wines = Wine.query();

}

function WineDetailCtrl(Wine) {

    this.wine = Wine.get({wineId:this.params.wineId});


    this.saveWine = function () {
        if (this.wine.id > 0)
            this.wine.$update({wineId:this.wine.id});
        else
            this.wine.$save();
        window.location = "#/wines";
    }

    this.deleteWine = function () {
        this.wine.$delete({wineId:this.wine.id}, function() {
            alert('Wine ' + wine.name + ' deleted')
            window.location = "#/wines";
        });
    }

}*/