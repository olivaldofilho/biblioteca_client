angular.module('biblioteca_client').controller('livro', function($scope, $resource, $routeParams, Livro){
    //var Livro = $resource('http://localhost:10000/api/livro/:idLivro');
    //var LivroSalva = $resource('http://localhost:10000/api/livro/');
    $scope.mensagem = {texto: ''};
    $scope.mensagemErro = {
        texto: '',
        status: ''                     
    };
    $scope.livro = new Livro();                          
    
    $scope.novo = function(){
        redirectTo: '/livro';
        $scope.mensagem = {texto: ''};
        $scope.livro = new Livro();
    }

    $scope.delete = function(){
        var idLivro = $scope.livro.id;
        Livro.delete({idLivro}, function(livro) {
            $scope.mensagem = {texto: 'Livro excluído com sucesso! '};            
			$scope.livro = livro;
		}, 
		function(erro) {		    
			$scope.mensagemErro = {texto: 'Erro ao excluir livro. ',
                                   status: erro};            
		});        
    }

    $scope.salva = function(){
        console.log($scope.livro);
        $scope.livro.$save()        
            .then(function(livro){
                $scope.mensagem = {texto: 'Livro cadastrado com sucesso! '};
			    $scope.livro = livro;        
            })
            .catch(function(erro){
                console.log(erro.status);
                $scope.mensagemErro = {texto: 'Erro ao gravar livro. ',
                                   status: erro};
                $scope.livro = new Livro();                 
             });
    };        
    var idLivro = $routeParams.livroId;
    if (idLivro){        
        Livro.get({idLivro}, function(livro) {
            $scope.mensagem = {texto: 'Contrato encontrado! ' + idLivro};            
			$scope.livro = livro;
		}, 
		function(erro) {		    
			$scope.mensagem = {texto: 'Contato não existe. Novo contato. '};
            $scope.livro = new Livro();
		});    
    } else {
        //$scope.mensagem = {texto: 'Contato não existe. Novo contato. '};
        $scope.livro = new Livro();        
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