angular.module('biblioteca_client')
    .controller('requisicoes', function(Requisicao, $scope, $resource, $mdDialog){
    $scope.total = 0;
    $scope.filtro = '';
    $scope.mensagem = {texto: '', status: ''};

    novo();

    $scope.novo = function(){
        novo();
        window.location.href = "#/requisicao/";
    };

    function novo(){
        $scope.mensagem = {texto: '', status: ''};                         
        $scope.requisicao = new Requisicao();
    };

    function salva(){                
        $scope.requisicao.$save()        
            .then(function(requisicao){
                $scope.mensagem = {texto: 'Requisicão cadastrada com sucesso! ', status: ''};
			    $scope.requisicao = requisicao;        
            })
            .catch(function(erro){
                console.log(erro.status);
                $scope.mensagem = {texto: 'Erro ao gravar requisicao. ', status: erro};
                $scope.requisicao = new requisicao();                 
             });
    };

    $scope.salva = function(){
        salva();
    };

    $scope.closeDialog = function(answer) {
        $mdDialog.hide(answer);
    };

    $scope.editar = function(id){        
        window.location.href = "#/requisicao/" + id;
    }

    $scope.showAddDevolucao = function(requisicao, ev) {
        $scope.requisicao = requisicao;
        $mdDialog.show({
            targetEvent: ev,
            controller: "requisicaodatadevolucao",
            controllerAs: 'photoViewerVm',
            templateUrl: "partials/requisicaodatadevolucao.html"
        })
        .then(function(requisicao) {                      
            $scope.requisicao.data_devolucao = requisicao.data_devolucao;
            $scope.requisicao.obs_devolucao = requisicao.obs_devolucao;
            $scope.requisicao.status = requisicao.status;
            salva();
        }, function() {            
            $scope.mensagem = {texto: 'You cancelled the dialog.', status: ''};
        });
    };

    function getRequisicoes(){
        Requisicao.query(
            function(requisicoes) { 
                $scope.requisicoes = requisicoes; 
            }, 
            function(erro) {
                $scope.mensagem = {texto: 'Não foi possível obter a lista de requisições ', status: erro};                
            }
        );        
    };

    getRequisicoes();
});