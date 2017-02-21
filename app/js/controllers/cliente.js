angular.module('biblioteca_client')
    .controller('cliente', function(Cliente, $scope, $resource, $routeParams, $cookies){
    //var Livro = $resource('http://localhost:10000/api/livro/:idLivro');
    //var LivroSalva = $resource('http://localhost:10000/api/livro/');
    
    $scope.mensagem = {texto: ''};
    $scope.mensagemErro = {
        texto: '',
        status: ''                     
    };
    $scope.cliente = new Cliente();                          
    
    $scope.novo = function(){
        redirectTo: '/cliente';
        $scope.mensagem = {texto: ''};
        $scope.cliente = new Cliente();
    }

    $scope.delete = function(){
        var id = $scope.cliente.id;
        if (!id){
            $scope.mensagem = {texto: 'Selecione um cadastro válido! '}; 
            return;
        }
        Cliente.delete({id}, function(cliente) {
            $scope.mensagem = {texto: 'Cliente excluído com sucesso! '};            
			$scope.cliente = cliente;
		}, 
		function(erro) {		    
			$scope.mensagemErro = {texto: 'Erro ao excluir cliente. ',
                                   status: erro};            
		});        
    }

    $scope.salva = function(){
        console.log($scope.cliente);
        $scope.cliente.$save()        
            .then(function(cliente){
                $scope.mensagem = {texto: 'Cliente cadastrado com sucesso! '};
			    $scope.cliente = cliente;        
            })
            .catch(function(erro){
                console.log(erro.status);
                $scope.mensagemErro = {texto: 'Erro ao gravar cliente. ',
                                   status: erro};
                $scope.cliente = new Cliente();                 
             });
    };        
    var id = $routeParams.id;
    if (id){        
        Cliente.get({id}, function(cliente) {
            $scope.mensagem = {texto: 'Cliente encontrado! ' + id};            
			$scope.cliente = cliente;
		}, 
		function(erro) {		    
			$scope.mensagem = {texto: 'Cliente não existe. Novo contato. '};
            $scope.cliente = new Cliente();
		});    
    } else {
        //$scope.mensagem = {texto: 'Contato não existe. Novo contato. '};
        $scope.cliente = new Cliente();        
    };
});


//LivroSalva.save($scope.livro)        
        //LivroSalva.save({$scope.contato});        
        /*LivroSalva.save($scope.livro, function(livro){            
            $scope.mensagem = {texto: 'Contrato encontrado! ' + idLivro};
			$scope.livro = livro;
            //console.log(res.statusCode);
            },
            function(erro){
                console.log(erro);
			    $scope.mensagem = {texto: 'Erro ao gravar contato. ' + erro};
                $scope.livro = new Livro();
            }
        );

        /*$scope.contato.$save()
            .then(function(){
                $scope.mensagem = {texto: 'Salvo com sucesso'};
                $scope.contato = new Contato();
             })
             .catch(function(erro){
                 $scope.mensagem = {texto: 'Não foi possível salvar'};
             });
        };         
           */