angular.module('biblioteca_client', ['ngRoute', 'ngResource'])
    .config(function($routeProvider, $locationProvider){    
    
    /*$routeProvider.when('/home', {
        templateUrl: 'home.html',
        controller: 'home'
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

    $routeProvider.when('/basicusage', {
        templateUrl: 'partials/basicusage.html',
        controller: 'basicusage'
    });

     $routeProvider.when('/input', {
        templateUrl: 'partials/input.html'
    });

    $locationProvider.hashPrefix('');    
    //$locationProvider.html5Mode({enabled: true, requireBase: false});
    $routeProvider.otherwise({redirectTo: '/home'});
});