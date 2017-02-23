angular.module('biblioteca_client').factory('Genero', function($resource){
    //return $resource('http://localhost:10000/api/generos/:id');
    return $resource('https://bibliotecassiaserver.herokuapp.com/api/generos/:id');
})