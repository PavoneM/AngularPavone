'use strict';

angular
  .module('showcaseApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])

  .controller('indexCtrl', function ($scope,$http) {
    $http.get("model.json").success(function (data) {
      $scope.modele = data;
    })
  })

  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/CV', {
        templateUrl: 'views/CV.html',
        controller: 'CVCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
