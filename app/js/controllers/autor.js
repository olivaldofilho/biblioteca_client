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
        $scope.mensagem = {texto: '', status: ''};                         
        $scope.autor = new Autor();
    };
    
    $scope.delete = function(){
        var id = $scope.autor.id;
        if (!id){
            $scope.mensagem = {texto: 'Selecione um cadastro válido! ', status: ''}; 
            return;
        }
        Autor.delete({id}, function(autor) {
            $scope.mensagem = {texto: 'Autor excluído com sucesso! ', status: ''};            
			$scope.autor = autor;
		}, 
		function(erro) {		    
			$scope.mensagem = {texto: 'Erro ao excluir autor. ', status: erro};
		});        
    };

    $scope.salva = function(){
        console.log($scope.autor);
        $scope.autor.$save()        
            .then(function(autor){
                $scope.mensagem = {texto: 'Autor cadastrado com sucesso', status: ''};
			    $scope.autor = autor;        
            })
            .catch(function(erro){
                console.log(erro.status);
                $scope.mensagem = {texto: 'Erro ao gravar autor. ', status: erro};
                $scope.autor = new Autor();                                
            });
    };

    $scope.pesquisa = function(){
        window.location.href = "#/autores/";       
    }

    var id = $routeParams.id;
    if (id){        
        Autor.get({id}, function(autor) {
            //$scope.mensagem = {texto: 'Autor encontrado! ' + id, status: ''};            
			$scope.autor = autor;
		}, 
		function(erro) {		    
			$scope.mensagem = {texto: 'Autor não existe. Novo contato. ', status: ''};
            $scope.autor = new Autor();
		});    
    } else {
        $scope.autor = new Autor();        
    };
});