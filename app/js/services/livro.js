angular.module('biblioteca_client').factory('Livro', function($resource){
    return $resource('http://localhost:10000/api/livros/:id');
    //return $resource('https://bibliotecassiaserver.herokuapp.com/api/livros/:id');
})