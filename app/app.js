(function () {
    'use strict';

    angular.module('templateApp', ['ui.bootstrap',
        'ngStorage',
        'ngRoute',
        'angular-loading-bar',
        'ngGrid'
    ])
        .constant('urls', {
            BASE: 'https://apps.bidvestfm.co.za/FM2GO/Telkom',
            BASE_API: 'https://apps.bidvestfm.co.za/FM2GO/Telkom'
        })
        .config(function($routeProvider) {
        $routeProvider
            .when('/', {
                controller: 'BaseController',
                templateUrl: 'app/views/base.html'
            })
            .when('/login', {
                controller: 'BaseController',
                templateUrl: 'app/views/login.html'
            })
            .when('/applist', {
                controller: 'AutoController',
                templateUrl: 'app/views/applist.html'
            })
            .when('/refData', {
                controller: 'refDataController',
                templateUrl: 'app/views/refData.html'
            })
            .when('/regprocess', {
                controller: 'BaseController',
                templateUrl: 'app/views/regprocess.html'
            })
            .otherwise( { redirectTo: '/' } );
    });
    
}());