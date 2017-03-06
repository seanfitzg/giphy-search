/*eslint-disable no-console */
/*eslint-disable no-unused-vars */
import './index.css';
import './css/bootstrap.css'
import './css/thumbnail-gallery.css'
import './fonts/glyphicons-halflings-regular.eot'

import angular from 'angular';
import ngRoute from 'angular-route';
import ngResource from 'angular-resource';
import MainController from './mainController';

var app = angular.module("giphyApp", ["ngRoute", "ngResource"]);

var exceptionHandler = function($injector) {
    return function(exception, cause) {
        console.error(exception, cause, exception.stack);
    };
};

app.controller("mainController", ["$http", MainController]);

app.config(["$routeProvider", "$locationProvider", function($routeProvider, $locationProvider) {

    $routeProvider
        .when("/", {
            templateUrl: 'templates/mainPanel.html',
            controller: "mainController",
            controllerAs: "main",
            reloadOnSearch: false
        });

    $routeProvider.otherwise({
        redirectTo: "/"
    });
}]);

app.factory("$exceptionHandler", ["$injector", exceptionHandler]);