angular.module('biblioteca_client')
    .controller('cliente', function(Cliente, $scope, $resource, $routeParams, $cookies){
                                     
    novo();

    $scope.novo = function(){
        novo();
        window.location.href = "#/cliente/";
    };

    function novo(){
        $scope.mensagem = {texto: '', status: ''};                         
        $scope.cliente = new Cliente();
    };
    
    $scope.delete = function(){
        var id = $scope.cliente.id;
        if (!id){
            $scope.mensagem = {texto: 'Selecione um cadastro válido! ', status: ''}; 
            return;
        }
        Cliente.delete({id}, function(cliente) {
            $scope.mensagem = {texto: 'Cliente excluído com sucesso! ', status: ''};            
			$scope.cliente = cliente;
		}, 
		function(erro) {		    
			$scope.mensagem = {texto: 'Erro ao excluir cliente. ', status: erro};
		});        
    };

    $scope.salva = function(){
        console.log($scope.cliente);
        $scope.cliente.$save()        
            .then(function(cliente){
                $scope.mensagem = {texto: 'Cliente cadastrado com sucesso', status: ''};
			    $scope.cliente = cliente;        
            })
            .catch(function(erro){
                console.log(erro.status);
                $scope.mensagem = {texto: 'Erro ao gravar cliente. ', status: erro};
                $scope.cliente = new Cliente();                                
            });
    };

    $scope.pesquisa = function(){
        window.location.href = "#/clientes/";       
    }

    var id = $routeParams.id;
    if (id){        
        Cliente.get({id}, function(cliente) {                    
			$scope.cliente = cliente;
		}, 
		function(erro) {		    
			$scope.mensagem = {texto: 'Cliente não existe. Novo contato. ', status: ''};
            $scope.cliente = new Cliente();
		});    
    } else {
        $scope.cliente = new Cliente();        
    };
});