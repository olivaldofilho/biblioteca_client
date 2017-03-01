angular.module('biblioteca_client').controller('generos', function(Genero, $scope, $resource){
    $scope.total = 0;
    $scope.filtro = '';
    $scope.mensagem = {texto: ''};

    novo();

    $scope.novo = function(){
        novo();        
        window.location.href = "#/genero/";
    };

    function novo(){
        $scope.mensagem = {texto: '', status: ''};                         
        $scope.genero = new Genero();
    };

    $scope.editar = function(id){
        debugger;
        window.location.href = "#/genero/" + id;
    };

    function getGeneros(){
        //debugger;
        Genero.query(
            function(generos) { 
                $scope.generos = generos; 
            }, 
            function(erro) {
                $scope.mensagem = {texto: 'Não foi possível obter a lista de gêneros ', status: erro};                
            });
    };
    getGeneros();
});