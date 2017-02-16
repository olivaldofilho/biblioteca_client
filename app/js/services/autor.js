angular.module('biblioteca_client').factory('Autor', function($resource){
    //return $resource('http://localhost:10000/api/autores/:id');
    return $resource('https://bibliotecassiaserver.herokuapp.com/api/autores/:id');
})