angular.module('biblioteca_client')
    .controller('generos', function(Genero, $scope, $resource, $mdDialog){
    $scope.total = 0;
    $scope.filtro = '';
    $scope.mensagem = {texto: ''};

     $scope.closeDialog = function(answer) {
        $mdDialog.hide(answer);
    };

    $scope.editar = function(id){
        debugger;
        window.location.href = "#/genero/" + id;
    }
    function getGeneros(){
        //debugger;
        Genero.query(
            function(generos) { 
                $scope.generos = generos; 
            }, 
            function(erro) {
                $scope.mensagem = {texto: 'Não foi possível obter a lista de generos ' + erro};                
            }
        );        
    }
    getGeneros();
});