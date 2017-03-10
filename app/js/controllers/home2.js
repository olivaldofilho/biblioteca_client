angular.module('biblioteca_client')
  .controller('home2', function ($scope, $timeout, $mdSidenav, $log, $mdBottomSheet, $mdDialog, $rootScope) {
  
  showLogin();

  function showLogin(){
    $mdDialog.show({
            //targetEvent: ev,            
            templateUrl: "partials/login.html",
            controller: "login",
            controllerAs: 'vm'
        })
        .then(function(login) {            
            //$scope.requisicao.id_cliente = cliente.id;
            //$scope.requisicao.nome_cliente = cliente.nome;         
        }, function() {
            //$scope.requisicao.nome_cliente = 'You cancelled the dialog.';
        });
  };

$scope.showLogin = function(ev) {
    $mdDialog.show({
        targetEvent: ev,
        controller: "login",
        controllerAs: 'vm',
        templateUrl: "partials/login.html"
    })
    .then(function(cliente) {            
        //$scope.requisicao.id_cliente = cliente.id;
        //$scope.requisicao.nome_cliente = cliente.nome;         
    }, function() {
        //$scope.requisicao.nome_cliente = 'You cancelled the dialog.';
    });
    //console.log($scope.requisicao.nome_cliente);
};
    
    
    $scope.heroImage = {
        background: 'url(img/background/img.jpg)'
    };
    
    $scope.toggleLeft = buildDelayedToggler('left');
    $scope.toggleRight = buildToggler('right');
    
    $scope.isOpenRight = function(){
        return $mdSidenav('right').isOpen();
    };

    $scope.toggleSidenav = function(menuId) {
        $mdSidenav(menuId).toggle();
    };

    $scope.menu = [
        {
            link : '#/autor',
            title: 'Autores',
            icon: 'assignment_ind'
        },
        {
            link : '#/cliente',
            title: 'Clientes',
            icon: 'group'
        },
        {
            link : '#/genero',
            title: 'Genero',
            icon: 'bookmark'
        },
        {
            link : '#/livro',
            title: 'Livro',
            icon: 'dashboard'
        }
    ];
    $scope.movimentacao = [        
        {
            link : '#/requisicao',
            title: 'Requisição',
            icon: 'list'
        },
        {
            link : '#/requisicoespendentes',
            title: 'Devolução',
            icon: 'list'
        }
    ];    
    
    $scope.admin = [        
        {
            link : '/',
            title: 'Configurações',
            icon: 'settings'
        }
  ];

  $scope.alert = '';
  $scope.showListBottomSheet = function($event) {
    $scope.alert = '';
    $mdBottomSheet.show({
        template: '<md-bottom-sheet class="md-list md-has-header"> <md-subheader>Settings</md-subheader> <md-list> <md-item ng-repeat="item in items"><md-item-content md-ink-ripple flex class="inset"> <a flex aria-label="{{item.name}}" ng-click="listItemClick($index)"> <span class="md-inline-list-icon-label">{{ item.name }}</span> </a></md-item-content> </md-item> </md-list></md-bottom-sheet>',
      controller: 'ListBottomSheetCtrl',
      targetEvent: $event
    }).then(function(clickedItem) {
      $scope.alert = clickedItem.name + ' clicked!';
    });
  };

    /**
     * Supplies a function that will continue to operate until the
     * time is up.
     */
    function debounce(func, wait, context) {
      var timer;

      return function debounced() {
        var context = $scope,
            args = Array.prototype.slice.call(arguments);
        $timeout.cancel(timer);
        timer = $timeout(function() {
          timer = undefined;
          func.apply(context, args);
        }, wait || 10);
      };
    }

    /**
     * Build handler to open/close a SideNav; when animation finishes
     * report completion in console
     */
    function buildDelayedToggler(navID) {
      return debounce(function() {
        // Component lookup should always be available since we are not using `ng-if`
        $mdSidenav(navID)
          .toggle()
          .then(function () {
            $log.debug("toggle " + navID + " is done");
          });
      }, 200);
    }

    function buildToggler(navID) {
      return function() {
        // Component lookup should always be available since we are not using `ng-if`
        $mdSidenav(navID)
          .toggle()
          .then(function () {
            $log.debug("toggle " + navID + " is done");
          });
      };
    }
  })
  .controller('LeftCtrl', function ($scope, $timeout, $mdSidenav, $log) {
    $scope.close = function () {
      // Component lookup should always be available since we are not using `ng-if`
      $mdSidenav('left').close()
        .then(function () {
          $log.debug("close LEFT is done");
        });

    };
  })
  .controller('RightCtrl', function ($scope, $timeout, $mdSidenav, $log) {
    $scope.close = function () {
      // Component lookup should always be available since we are not using `ng-if`
      $mdSidenav('right').close()
        .then(function () {
          $log.debug("close RIGHT is done");
        });
    };
  });

/**
Copyright 2016 Google Inc. All Rights Reserved. 
Use of this source code is governed by an MIT-style license that can be foundin the LICENSE file at http://material.angularjs.org/HEAD/license.
**/