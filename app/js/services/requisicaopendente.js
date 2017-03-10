angular.module('biblioteca_client').factory('RequisicaoPendente', function($resource){
    //return $resource('http://localhost:10000/api/requisicoespendentes');
    return $resource('https://bibliotecassiaserver.herokuapp.com/api/requisicoespendentes');
})