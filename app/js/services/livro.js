angular.module('biblioteca_client').factory('Livro', function($resource){
    return $resource('http://localhost:10000/api/livros/:idLivro');
})