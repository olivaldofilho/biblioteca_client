angular.module('biblioteca_client').factory('Cliente', function($resource){
    //return $resource('http://localhost:10000/api/clientes/:id');
    return $resource('https://bibliotecassiaserver.herokuapp.com/api/clientes/:id');
})