angular.module('biblioteca_client')
    .controller('login', function($scope, $cookies, $rootScope, $location){
 
    function getUser(){
        $scope.user = $cookies.get('user');
    }

    $scope.setCookie = function(user){
        debugger;
        $cookies.put('user', user);
        $location.path('/home')
        console.log($scope.user);
    } 
    getUser();
      
});