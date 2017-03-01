angular.module('biblioteca_client')
    .controller('requisicaodatadevolucao', function(Requisicao, $scope, $resource, $mdDialog, $mdDateLocale){

    $scope.total = 0;
    $scope.filtro = '';
    $scope.mensagem = {texto: ''};

    $mdDateLocale.formatDate = function(date) {
        return date ? moment(date).format('DD/MM/YYYY') : '';
    };

    $scope.closeDialog = function(requisicao) {
        requisicao.status = 2;
        $mdDialog.hide(requisicao); 
    };

    $scope.cancel = function() {
      $mdDialog.cancel();
    };
});