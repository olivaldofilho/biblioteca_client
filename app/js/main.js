angular.module('biblioteca_client', ['ngRoute', 'ngResource', 'ngMaterial', 'ngMdIcons', 'ngCookies', 'meusComponentes'])
    .config(function($routeProvider, $locationProvider, $mdDateLocaleProvider){    
    $routeProvider
        .when('/autor/:id?', {
            templateUrl: 'partials/autor.html',
            controller: 'autor'
        })
        .when('/autores', {
            templateUrl: 'partials/autores.html',
            controller: 'autores'
        })        
        .when('/cliente/:id?', {
            templateUrl: 'partials/cliente.html',
            controller: 'cliente'           
        })
        .when('/clientes', {
            templateUrl: 'partials/clientes.html',
            controller: 'clientes'           
        })
        .when('/livro/:id?', {
            templateUrl: 'partials/livro.html',
            controller: 'livro'
        })
        .when('/livros/', {
            templateUrl: 'partials/livros.html',
            controller: 'livros'
        })
        .when('/login', {
            templateUrl: 'partials/login.html',
            controller: 'login'
        })
        .when('/login2', {
            templateUrl: 'partials/login2.html'
        })
        .when('/requisicao', {
            templateUrl: 'partials/requisicao.html',
            controller: 'requisicao'
        })         
        .otherwise({redirectTo: '/home'});

    /*$routeProvider.when('/login', {
        templateUrl: 'partials/login.html',
        controller: 'login'
    });

    $routeProvider.when('/login2', {
        templateUrl: 'partials/login2.html'
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
    });*/

    $locationProvider.hashPrefix('');    
    //$locationProvider.html5Mode({enabled: true, requireBase: false});
    //$routeProvider.otherwise({redirectTo: '/home'});
});