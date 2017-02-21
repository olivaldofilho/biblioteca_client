angular.module('biblioteca_client')
    .controller('clientespesquisa', function(Cliente, $scope, $resource, $mdDialog){

    $scope.total = 0;
    $scope.filtro = '';
    $scope.mensagem = {texto: ''};

    $scope.closeDialog = function(cliente) {        
        $mdDialog.hide(cliente);
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