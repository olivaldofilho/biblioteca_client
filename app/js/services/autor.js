angular.module('biblioteca_client').factory('Autor', function($resource){
    return $resource('http://localhost:10000/api/autores/:id');
})