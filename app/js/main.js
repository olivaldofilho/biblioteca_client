angular.module('biblioteca_client', ['ngRoute', 'ngResource', 'ngMaterial', 'ngMessages', 'ngMdIcons', 'ngCookies', 'uppercase', 'validacao', 'validacaoCep', 'angularUtils.directives.dirPagination'])
    .config(function($routeProvider, $locationProvider, $mdDateLocaleProvider){
    //debugger;
    $routeProvider
        .when('/autor/:id?', {
            resolve: {
                "check": function($location, $rootScope){
                    if (!$rootScope.loggedIn){
                        $location.path('/');
                        return;                   
                    }
                }
            }, 
            templateUrl: 'partials/autor.html',
            controller: 'autor'
        })
        .when('/autores', {
            resolve: {
                "check": function($location, $rootScope){
                    if (!$rootScope.loggedIn){
                        $location.path('/');
                        return;                   
                    }
                }
            },
            templateUrl: 'partials/autores.html',
            controller: 'autores'
        })
        .when('/cliente/:id?', {
            resolve: {
                "check": function($location, $rootScope){
                    if (!$rootScope.loggedIn){
                        $location.path('/');
                        return;                   
                    }
                }
            },
            templateUrl: 'partials/cliente.html',
            controller: 'cliente'           
        })
        .when('/clientes', {
            resolve: {
                "check": function($location, $rootScope){
                    if (!$rootScope.loggedIn){
                        $location.path('/');
                        return;                   
                    }
                }
            },
            templateUrl: 'partials/clientes.html',
            controller: 'clientes'           
        })
        .when('/livro/:id?', {
            resolve: {
                "check": function($location, $rootScope){
                    if (!$rootScope.loggedIn){
                        $location.path('/');
                        return;                   
                    }
                }
            },
            templateUrl: 'partials/livro.html',
            controller: 'livro'
        })
        .when('/livros/', {
            resolve: {
                "check": function($location, $rootScope){
                    if (!$rootScope.loggedIn){
                        $location.path('/');
                        return;                   
                    }
                }
            },
            templateUrl: 'partials/livros.html',
            controller: 'livros'
        })
        .when('/login', {            
            templateUrl: 'partials/login.html',
            controller: 'login',
            controllerAs: 'loginCtrl'
        })
        .when('/login2', {
            resolve: {
                "check": function($location, $rootScope){
                    if (!$rootScope.loggedIn){
                        $location.path('/');
                        return;                   
                    }
                }
            },
            templateUrl: 'partials/login2.html'
        })
        .when('/requisicao/:id?', {
            resolve: {
                "check": function($location, $rootScope){
                    if (!$rootScope.loggedIn){
                        $location.path('/');
                        return;                   
                    }
                }
            },
            templateUrl: 'partials/requisicao.html',
            controller: 'requisicao'
        })
        .when('/requisicoes', {
            resolve: {
                "check": function($location, $rootScope){
                    if (!$rootScope.loggedIn){
                        $location.path('/');
                        return;                   
                    }
                }
            },
            templateUrl: 'partials/requisicoes.html',
            controller: 'requisicoes'
        })
        .when('/genero/:id?', {
            resolve: {
                "check": function($location, $rootScope){
                    if (!$rootScope.loggedIn){
                        $location.path('/');
                        return;                   
                    }
                }
            },
            templateUrl: 'partials/genero.html',
            controller: 'genero'
        })
        .when('/generos', {
            resolve: {
                "check": function($location, $rootScope){
                    if (!$rootScope.loggedIn){
                        $location.path('/');
                        return;                   
                    }
                }
            },
            templateUrl: 'partials/generos.html',
            controller: 'generos'
        })
        // .when('/home', {
        //     templateUrl: 'partials/home2.html',
        //     controller: 'home2'
        // })
        .when('/', {            
            redirectTo: '/login'            
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