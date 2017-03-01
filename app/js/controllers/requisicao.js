angular.module('biblioteca_client')
    .controller('requisicao', function(Requisicao, $scope, $routeParams, $mdDialog, $mdDateLocale){
    var vm = this;
    //vm.ok = ok;
    novo();
    
    $scope.novo = function(){
        novo();
        window.location.href = "#/requisicao/";
        $scope.mensagem = {texto: ''};        
    };

    function novo(){
        $scope.color = '';
        $scope.mensagem = {texto: '', status: ''};
        $scope.requisicao = new Requisicao();
    };

    $scope.salva = function(){
        console.log($scope.requisicao);
        if (!$scope.requisicao.id){
            $scope.requisicao.status = 1;
        }
        $scope.requisicao.$save()        
            .then(function(requisicao){
                $scope.mensagem = {texto: 'Requisicão cadastrada com sucesso! '};
			    $scope.requisicao = requisicao;        
            })
            .catch(function(erro){
                console.log(erro.status);
                $scope.mensagemErro = {texto: 'Erro ao gravar requisicao. ', status: erro};
                $scope.requisicao = new requisicao();                 
             });
    }; 

    $scope.pesquisa = function(){
        window.location.href = "#/requisicoes/";       
    }

    $scope.formatDate = function(date) {
         return moment(date).format('DD-MM-YYYY');
    }; 

    $mdDateLocale.formatDate = function(date) {
        return date ? moment(date).format('DD/MM/YYYY') : '';
    };

    $scope.calculaDataDevolucao = function(){        
       $scope.requisicao.data_devolucao = '20/03/2017'; 
    }

    $scope.dateChanged = function () {        
        // Do something with scope.selectedDate
        debugger;
        var dataDevolucao = new Date($scope.requisicao.data_retirada);
        dataDevolucao.setDate(dataDevolucao.getDate() + 7);
        var date = moment()
            .add(2,'d') //replace 2 with number of days you want to add
            .toDate();
        $scope.requisicao.data_prevista_devolucao = dataDevolucao;
    };
    
    $scope.myDate = new Date('2015-10-15');
    
    $scope.showAddCliente = function(ev) {
        $mdDialog.show({
            targetEvent: ev,
            controller: "clientespesquisa",
            controllerAs: 'photoViewerVm',
            templateUrl: "partials/clientespesquisa.html"
        })
        .then(function(cliente) {            
            $scope.requisicao.id_cliente = cliente.id;
            $scope.requisicao.nome_cliente = cliente.nome;         
        }, function() {
            $scope.requisicao.nome_cliente = 'You cancelled the dialog.';
        });
        console.log($scope.requisicao.nome_cliente);
    };

    $scope.showAddLivro = function(ev) {
        $mdDialog.show({
            targetEvent: ev,
            controller: "livrospesquisa",
            controllerAs: 'photoViewerVm',
            templateUrl: "partials/livrospesquisa.html"
        })
        .then(function(livro) {            
            $scope.requisicao.id_livro = livro.id;
            $scope.requisicao.titulo_livro = livro.titulo;         
        }, function() {
            $scope.requisicao.titulo_livro = 'You cancelled the dialog.';
        });
        console.log($scope.requisicao.titulo_livro);
    };

    // function ok() {
    //     // Easily hides most recent dialog shown...
    //     // no specific instance reference is needed.
    //         $mdDialog.hide();
    // }

    var id = $routeParams.id;
    if (id){        
        Requisicao.get({id}, function(requisicao) {
            //requisicao.data_retirada = (Date.parse(requisicao.data_retirada), 'dd-MM-yyyy');
            //requisicao.data_devolucao =(Date.parse(requisicao.data_devolucao), 'dd-MM-yyyy');
            console.log(requisicao);
            $scope.mensagem = {texto: 'Requisição encontrado! ' + id};            
			$scope.requisicao = requisicao;
		}, 
		function(erro) {		    
			$scope.mensagem = {texto: 'Requisição não existe. Novo contato. '};
            $scope.requisicao = new Requisicao();
		});    
    } else {
        //$scope.mensagem = {texto: 'Contato não existe. Novo contato. '};
        $scope.requisicao = new Requisicao();        
    };
});