angular.module('biblioteca_client').factory('Requisicao', function($resource){
    return $resource('http://localhost:10000/api/requisicoes/:id');
    //return $resource('https://bibliotecassiaserver.herokuapp.com/api/requisicoes/:id');
})