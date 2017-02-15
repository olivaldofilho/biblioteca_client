angular.module('biblioteca_client').factory('Livro', function($resource){
    return $resource('https://bibliotecassiaserver.herokuapp.com/api/livros/:idLivro');
})