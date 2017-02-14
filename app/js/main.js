angular.module('biblioteca_client', ['ngRoute', 'ngResource', 'ngMaterial'])
    .config(function($routeProvider, $locationProvider){    
    
    /*$routeProvider.when('/home', {
        templateUrl: 'home.html',
        controller: 'home'
    });*/

    /*$routeProvider.when('/home2', {
        templateUrl: 'partials/home2.html',
        controller: 'home2'
    });*/

    $routeProvider.when('/login', {
        templateUrl: 'partials/login.html',
        controller: 'login'
    });

    $routeProvider.when('/livro', {
        templateUrl: 'partials/livro.html',
        controller: 'livro'
    });

    $routeProvider.when('/livro/:livroId', {
        templateUrl: 'partials/livro.html',
        controller: 'livro'
    });    

    $routeProvider.when('/livros', {
        templateUrl: 'partials/livros.html',
        controller: 'livros'
    });

    $locationProvider.hashPrefix('');    
    //$locationProvider.html5Mode({enabled: true, requireBase: false});
    $routeProvider.otherwise({redirectTo: '/home'});
});