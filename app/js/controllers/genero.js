angular.module('biblioteca_client')
    .controller('genero', function(Genero, $scope, $resource, $routeParams, $cookies){
                             
    novo();

    $scope.novo = function(){
        novo();
        window.location.href = "#/genero/";
    };

    function novo(){
        $scope.mensagem = {texto: ''};
        $scope.mensagemErro = {
            texto: '',
            status: ''
        };                   
        $scope.genero = new Genero();        
    };
    
    $scope.delete = function(){
        var id = $scope.genero.id;
        if (!id){
            $scope.mensagem = {texto: 'Selecione um cadastro válido! '}; 
            return;
        }
        Genero.delete({id}, function(genero) {
            $scope.mensagem = {texto: 'Genero excluído com sucesso! '};            
			$scope.genero = genero;
		}, 
		function(erro) {		    
			$scope.mensagemErro = {texto: 'Erro ao excluir genero. ',
                                   status: erro};            
		});        
    };

    $scope.salva = function(){
        console.log($scope.genero);
        $scope.genero.$save()        
            .then(function(genero){
                $scope.mensagem = {texto: 'Genero cadastrado com sucesso! '};
			    $scope.genero = genero;        
            })
            .catch(function(erro){
                console.log(erro.status);
                $scope.mensagemErro = {texto: 'Erro ao gravar genero. ',
                                       status: erro};
                $scope.genero = new Genero();                 
             });
    };        
    var id = $routeParams.id;
    if (id){        
        Genero.get({id}, function(genero) {
            $scope.mensagem = {texto: 'Genero encontrado! ' + id};            
			$scope.genero = genero;
		}, 
		function(erro) {		    
			$scope.mensagem = {texto: 'Genero não existe. Novo contato. '};
            $scope.genero = new Genero();
		});    
    } else {
        //$scope.mensagem = {texto: 'Contato não existe. Novo contato. '};
        $scope.genero = new Genero();        
    };
});