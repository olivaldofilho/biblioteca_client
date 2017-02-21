angular.module('biblioteca_client')
    .controller('requisicao', function($scope, $mdDialog, $mdDateLocale){
    var vm = this;
    vm.ok = ok;
    $scope.clienteNome = '';
    $scope.clienteId = '';
    $scope.livroDescricao = '';
    $scope.livroId = '';

    $scope.color = '';

    // $mdDateLocaleProvider.formatDate = function(date) {
    //     return moment(date).format('DD-MM-YYYY');
    // };

    //$mdDateLocaleProvider.months = ['janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho', 'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro'];

    $mdDateLocale.formatDate = function(date) {
        return date ? moment(date).format('DD/MM/YYYY') : '';
    };


    $scope.calculaDataDevolucao = function(){        
       $scope.requisicao.dataDevolucao = '20/03/2017'; 
    }

    $scope.dateChanged = function () {        
        // Do something with scope.selectedDate
        var dataDevolucao = new Date($scope.requisicao.dataRetirada);
        dataDevolucao.setDate(dataDevolucao.getDate() + 30);
        var date = moment()
            .add(2,'d') //replace 2 with number of days you want to add
            .toDate();
        $scope.requisicao.dataDevolucao = dataDevolucao;
    };
    
    $scope.myDate = new Date('2015-10-15');
    
    $scope.showAddCliente = function(ev) {
        $mdDialog.show({
            targetEvent: ev,
            controller: "clientespesquisa",
            controllerAs: 'photoViewerVm',
            templateUrl: "partials/clientespesquisa.html"
        })
        .then(function(cliente) {            
            $scope.clienteId = cliente.id;
            $scope.clienteNome = cliente.nome;         
        }, function() {
            $scope.clienteNome = 'You cancelled the dialog.';
        });
        console.log($scope.clienteNome);
    };

    $scope.showAddLivro = function(ev) {
        $mdDialog.show({
            targetEvent: ev,
            controller: "livrospesquisa",
            controllerAs: 'photoViewerVm',
            templateUrl: "partials/livrospesquisa.html"
        })
        .then(function(livro) {            
            $scope.livroId = livro.id;
            $scope.livroDescricao = livro.descricao;         
        }, function() {
            $scope.livroDescricao = 'You cancelled the dialog.';
        });
        console.log($scope.livroDescricao);
    };

    function ok() {
        // Easily hides most recent dialog shown...
        // no specific instance reference is needed.
            $mdDialog.hide();
    }
});