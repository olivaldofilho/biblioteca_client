angular.module('biblioteca_client').controller('livros', function($scope, $resource, Livro){
    //var Livro = $resource('http://localhost:10000/api/livros/');
    //$scope.livros = [];
    $scope.total = 0;
    $scope.filtro = '';
    $scope.mensagem = {texto: ''};

    function getLivros(){
        //debugger;
        Livro.query(
            function(livros) { 
                $scope.livros = livros; 
            }, 
            function(erro) {
                $scope.mensagem = {texto: 'Não foi possível obter a lista de contatos ' + erro};                
            });
    
        /*livro.query(function(livros){
            $scope.livros = livros;
            
            console.log($scope.livros);
        });*/
    }
    getLivros();
});