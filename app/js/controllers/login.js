angular.module('biblioteca_client')
    .controller('login', function($scope, $cookies, $rootScope, $location, $mdDialog, AuthenticationService){
    AuthenticationService.ClearCredentials();
    $scope.login = function(user){
        $scope.dataLoading = true;
        AuthenticationService.Login($scope.username, $scope.password, function(response) {
            if(response.success) {
                AuthenticationService.SetCredentials($scope.username, $scope.password);
                $rootScope.loggedIn = true;
                $location.path('/home.html');
                closeDialog(true);
            } else {
                $rootScope.loggedIn = false;
                $scope.error = response.message;
                $scope.dataLoading = false;
            }
        });

    function closeDialog(login){
        $mdDialog.hide(login);
    }

    $scope.closeDialog = function(login) {      
        $mdDialog.hide(login);
    };
        // if (($scope.user == 'admin') && ($scope.password == 'admin')){
        //     $rootScope.userName = user;
        //     $rootScope.password = password;
        //     $rootScope.loggedIn = true;
        //     $cookies.put('loggedIn', true);
        //     $cookies.put('user', user);
        //     $location.path('/home2.html');    
        // }else{
        //     $cookies.put('loggedIn', false);
        //     $rootScope.loggedIn = false;
        // }        
    }

    function getUser(){
        $scope.user = $cookies.get('user');
    };

    $scope.setCookie = function(user){        
        $cookies.put('user', user);
        $location.path('/home')
        console.log($scope.user);
    };
    getUser();      
});