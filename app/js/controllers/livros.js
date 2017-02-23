angular.module('biblioteca_client')
    .controller('livros', function(Livro, $scope, $resource, $mdDialog){
    $scope.total = 0;
    $scope.filtro = '';
    $scope.mensagem = {texto: ''};

     $scope.closeDialog = function(answer) {
        $mdDialog.hide(answer);
    };

    $scope.editar = function(id){        
        window.location.href = "#/livro/" + id;
    }
    function getLivros(){
        //debugger;
        Livro.query(
            function(livros) { 
                $scope.livros = livros; 
            }, 
            function(erro) {
                $scope.mensagem = {texto: 'Não foi possível obter a lista de livros ' + erro};                
            }
        );        
    }
    getLivros();
});