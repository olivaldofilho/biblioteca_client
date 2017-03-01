angular.module('biblioteca_client').controller('clientes', function(Cliente, $scope, $resource){
    $scope.total = 0;
    $scope.filtro = '';
    $scope.mensagem = {texto: ''};

    novo();

    $scope.novo = function(){
        novo();
        window.location.href = "#/cliente/";
    };

    function novo(){
        $scope.mensagem = {texto: '', status: ''};                         
        $scope.cliente = new Cliente();
    };

    $scope.editar = function(id){
        debugger;
        window.location.href = "#/cliente/" + id;
    };

    function getClientes(){
        //debugger;
        Cliente.query(
            function(clientes) { 
                $scope.clientes = clientes; 
            }, 
            function(erro) {
                $scope.mensagem = {texto: 'Não foi possível obter a lista de clientes ', status: erro};                
            });
    };
    getClientes();
});