angular.module('biblioteca_client').controller('autores', function(Autor, $scope, $resource){
    $scope.total = 0;
    $scope.filtro = '';
    $scope.mensagem = {texto: ''};

    novo();

    $scope.novo = function(){
        novo();
        window.location.href = "#/autor/";
    };

    function novo(){
        $scope.mensagem = {texto: '', status: ''};                         
        $scope.autor = new Autor();
    };

    $scope.editar = function(id){
        debugger;
        window.location.href = "#/autor/" + id;
    };

    function getAutores(){
        //debugger;
        Autor.query(
            function(autores) { 
                $scope.autores = autores; 
            }, 
            function(erro) {
                $scope.mensagem = {texto: 'Não foi possível obter a lista de autores ', status: erro};                
            });
    };
    getAutores();
});