angular.module('biblioteca_client')
    .controller('genero', function(Genero, $scope, $resource, $routeParams, $cookies){
                                     
    novo();

    $scope.novo = function(){
        novo();
        $scope.generoForm.$setPristine(true);
        $scope.generoForm.$setUntouched();
        $scope.generoForm.$setError = {};
        window.location.href = "#/genero/";
    };

    function novo(){
        $scope.mensagem = {texto: '', status: ''};                         
        $scope.genero = new Genero();
    };
    
    $scope.delete = function(){
        var id = $scope.genero.id;
        if (!id){
            $scope.mensagem = {texto: 'Selecione um cadastro válido! ', status: ''}; 
            return;
        }
        Genero.delete({id}, function(genero) {
            $scope.mensagem = {texto: 'Gênero excluído com sucesso! ', status: ''};            
			$scope.genero = genero;
		}, 
		function(erro) {		    
			$scope.mensagem = {texto: 'Erro ao excluir gênero. ', status: erro};
		});        
    };

    $scope.salva = function(){
        angular.forEach($scope.generoForm.$error, function(error) {
             angular.forEach(error, function(field) {
             field.$setTouched();
             });
        });
        if ($scope.generoForm.$invalid){
            return;
        };
        console.log($scope.genero);
        $scope.genero.$save()        
            .then(function(genero){
                $scope.mensagem = {texto: 'Gênero cadastrado com sucesso', status: ''};
			    $scope.genero = genero;        
            })
            .catch(function(erro){
                console.log(erro.status);
                $scope.mensagem = {texto: 'Erro ao gravar gênero. ', status: erro};
                $scope.genero = new Genero();                                
            });
    };

    $scope.pesquisa = function(){
        window.location.href = "#/generos/";       
    }

    var id = $routeParams.id;
    if (id){        
        Genero.get({id}, function(genero) {                    
			$scope.genero = genero;
		}, 
		function(erro) {		    
			$scope.mensagem = {texto: 'Genero não existe. Novo contato. ', status: ''};
            $scope.genero = new Genero();
		});    
    } else {
        $scope.genero = new Genero();        
    };
});