angular.module('biblioteca_client')
    .controller('livro', function(Livro, Autor, Genero, $scope, $resource, $routeParams, $cookies){
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
    };

    $scope.delete = function(){
        var id = $scope.livro.id;
        if (!id){
            $scope.mensagem = {texto: 'Selecione um cadastro válido! '}; 
            return;
        }
        Livro.delete({id}, function(livro) {
            $scope.mensagem = {texto: 'Livro excluído com sucesso! '};            
			$scope.livro = livro;
		}, 
		function(erro) {		    
			$scope.mensagemErro = {texto: 'Erro ao excluir livro. ',
                                   status: erro};            
		});        
    };

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
    var id = $routeParams.id;
    if (id){        
        Livro.get({id}, function(livro) {
            $scope.mensagem = {texto: 'Contrato encontrado! ' + id};            
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

    function getAutores(){        
        Autor.query(
            function(autores) { 
                $scope.autores = autores;                                
            }, 
            function(erro) {
                $scope.mensagem = {texto: 'Não foi possível obter a lista de autores ' + erro};                
            });
    };

    function getGeneros(){        
        Genero.query(
            function(generos) { 
                $scope.generos = generos;                                
            }, 
            function(erro) {
                $scope.mensagem = {texto: 'Não foi possível obter a lista de generos ' + erro};
            });
    };
    getGeneros();
    getAutores();
});