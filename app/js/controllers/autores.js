angular.module('biblioteca_client')
    .controller('autores', function(Autor, $scope, $resource){
    //var Livro = $resource('http://localhost:10000/api/livros/');
    //$scope.livros = [];
    $scope.total = 0;
    $scope.filtro = '';
    $scope.mensagem = {texto: ''};

    function getAutores(){
        //debugger;
        Autor.query(
            function(autores) { 
                $scope.autores = autores; 
            }, 
            function(erro) {
                $scope.mensagem = {texto: 'Não foi possível obter a lista de autores ' + erro};                
            });
    
        /*livro.query(function(livros){
            $scope.livros = livros;
            
            console.log($scope.livros);
        });*/
    }
    getAutores();
});