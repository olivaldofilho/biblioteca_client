angular.module('biblioteca_client')
    .controller('livro', function(Livro, Autor, Genero, $scope, $resource, $routeParams, $cookies){
    //var Livro = $resource('http://localhost:10000/api/livro/:idLivro');
    //var LivroSalva = $resource('http://localhost:10000/api/livro/');
    
    novo();
    getGeneros();
    getAutores();

    $scope.novo = function(){
        novo();        
        $scope.livroForm.$setPristine(true);
        $scope.livroForm.$setUntouched();
        $scope.livroForm.$setError = {};
        // reset all errors
        for (var att in  $scope.livroForm.$error) {
            if ($scope.livroForm.$error.hasOwnProperty(att)) {
                $scope.livroForm.$setValidity(att, true);
            };
        }; 
        window.location.href = "#/livro/";
    };

    function novo(){        
        $scope.mensagem = {texto: '', status: ''};
        $scope.livro = new Livro();
        $scope.autor = new Autor();
    };

    $scope.delete = function(){
        var id = $scope.livro.id;
        if (!id){
            $scope.mensagem = {texto: 'Selecione um cadastro válido! ', status: ''}; 
            return;
        }
        Livro.delete({id}, function(livro) {
            $scope.mensagem = {texto: 'Livro excluído com sucesso! ', status: ''};
			$scope.livro = livro;
		}, 
		function(erro) {		    
			$scope.mensagemErro = {texto: 'Erro ao excluir livro. ', status: erro};            
		});        
    };

    $scope.salva = function(){
        angular.forEach($scope.livroForm.$error, function(error) {
             angular.forEach(error, function(field) {
             field.$setTouched();
             });
         });        
        $scope.livroForm.$setDirty();
        if ($scope.livroForm.$invalid){
            return;
        }
        
        $scope.livro.$save()        
            .then(function(livro){
                $scope.mensagem = {texto: 'Livro cadastrado com sucesso! ', status: ''};
			    $scope.livro = livro;        
            })
            .catch(function(erro){
                console.log(erro.status);
                $scope.mensagemErro = {texto: 'Erro ao gravar livro. ', status: erro};
                $scope.livro = new Livro();                 
             });
    };

    $scope.pesquisa = function(){
        window.location.href = "#/livros/";
    };                            
               
    var id = $routeParams.id;
    if (id){        
        Livro.get({id}, function(livro) {                       
			$scope.livro = livro;
		}, 
		function(erro) {		    
			$scope.mensagem = {texto: 'Livro não existe. Novo contato. ', status: erro};
            $scope.livro = new Livro();
		});    
    } else {        
        $scope.livro = new Livro();        
    };

    function getAutores(){
        Autor.query(
            function(autores) {
                $scope.autores = autores;
            },
            function(erro) {
                $scope.mensagem = {texto: 'Não foi possível obter a lista de autores ', status: erro};
            });
    };

    function getGeneros(){
        Genero.query(
            function(generos) {
                $scope.generos = generos;
            },
            function(erro) {
                $scope.mensagem = {texto: 'Não foi possível obter a lista de generos ', status: erro};
            });
    };    
});