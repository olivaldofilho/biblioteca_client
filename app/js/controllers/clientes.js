angular.module('biblioteca_client')
    .controller('clientes', function(Cliente, $scope, $resource, $mdDialog){
    //var Livro = $resource('http://localhost:10000/api/livros/');
    //$scope.livros = [];
    $scope.total = 0;
    $scope.filtro = '';
    $scope.mensagem = {texto: ''};

     $scope.closeDialog = function(answer) {
        $mdDialog.hide(answer);
    };

    function getAutores(){
        //debugger;
        Cliente.query(
            function(clientes) { 
                $scope.clientes = clientes; 
            }, 
            function(erro) {
                $scope.mensagem = {texto: 'Não foi possível obter a lista de clientes ' + erro};                
            }
        );        
    }
    getAutores();
});