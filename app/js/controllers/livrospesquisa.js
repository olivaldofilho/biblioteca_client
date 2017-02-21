angular.module('biblioteca_client')
    .controller('livrospesquisa', function(Livro, $scope, $resource, $mdDialog){
        $scope.total = 0;
        $scope.filtro = '';
        $scope.mensagem = {texto: ''};

        $scope.closeDialog = function(livro){ 
            $mdDialog.hide(livro);
        };

        function getLivros(){
            Livro.query(
                function(livros) { 
                    $scope.livros = livros; 
                }, 
                function(erro) {
                    $scope.mensagem = {texto: 'Não foi possível obter a lista de contatos ' + erro};                
                });     
        }
        getLivros();
    });