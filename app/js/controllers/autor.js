angular.module('biblioteca_client')
    .controller('autor', function(Autor, $scope, $resource, $routeParams, $cookies){
    //var Livro = $resource('http://localhost:10000/api/livro/:idLivro');
    //var LivroSalva = $resource('http://localhost:10000/api/livro/');
    
                             
    novo();

    $scope.novo = function(){
        novo();
        window.location.href = "#/autor/";
    };

    function novo(){
        $scope.mensagem = {texto: ''};
        $scope.mensagemErro = {
            texto: '',
            status: ''
        };                   
        $scope.autor = new Autor();        
    };

    
    $scope.delete = function(){
        var id = $scope.autor.id;
        if (!id){
            $scope.mensagem = {texto: 'Selecione um cadastro válido! '}; 
            return;
        }
        Autor.delete({id}, function(autor) {
            $scope.mensagem = {texto: 'Autor excluído com sucesso! '};            
			$scope.autor = autor;
		}, 
		function(erro) {		    
			$scope.mensagemErro = {texto: 'Erro ao excluir autor. ',
                                   status: erro};            
		});        
    }

    $scope.salva = function(){
        console.log($scope.autor);
        $scope.autor.$save()        
            .then(function(autor){
                $scope.mensagem = {texto: 'Autor cadastrado com sucesso! '};
			    $scope.autor = autor;        
            })
            .catch(function(erro){
                console.log(erro.status);
                $scope.mensagemErro = {texto: 'Erro ao gravar autor. ',
                                   status: erro};
                $scope.autor = new Autor();                 
             });
    };        
    var id = $routeParams.id;
    if (id){        
        Autor.get({id}, function(autor) {
            $scope.mensagem = {texto: 'Autor encontrado! ' + id};            
			$scope.autor = autor;
		}, 
		function(erro) {		    
			$scope.mensagem = {texto: 'Autor não existe. Novo contato. '};
            $scope.autor = new Autor();
		});    
    } else {
        //$scope.mensagem = {texto: 'Contato não existe. Novo contato. '};
        $scope.autor = new Autor();        
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