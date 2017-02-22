angular.module('biblioteca_client')
    .controller('requisicoes', function(Requisicao, $scope, $resource, $mdDialog){
    $scope.total = 0;
    $scope.filtro = '';
    $scope.mensagem = {texto: ''};

     $scope.closeDialog = function(answer) {
        $mdDialog.hide(answer);
    };

    $scope.editar = function(id){
        debugger;
        window.location.href = "#/requisicao/" + id;
    }
    function getRequisicoes(){
        //debugger;
        Requisicao.query(
            function(requisicoes) { 
                $scope.requisicoes = requisicoes; 
            }, 
            function(erro) {
                $scope.mensagem = {texto: 'Não foi possível obter a lista de requisições ' + erro};                
            }
        );        
    }
    getRequisicoes();
});