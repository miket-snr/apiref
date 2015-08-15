angular.module('templateApp').controller('BaseController', ['$rootScope', '$scope', '$location','$timeout', '$localStorage', 'AuthsFactory',  function ($rootScope, $scope, $location,$timeout, $localStorage, Auth) {
                function successAuth(res) {
                    $localStorage.token = res.access_token;
                    $localStorage.username = res.username;
                    $localStorage.partner = res.partner;
                    $localStorage.clientcode = res.clientcode;
                    $scope.token = $localStorage.token;
                     $timeout(function () {
                      window.location = "/";
                    }, 110);
                   
                }

                $scope.signin = function () {
                    var formData = {
                       grant_type: 'password',
                        username: $scope.email,
                        password: $scope.password
                    };

                    Auth.signin(formData, successAuth, function () {
                        $rootScope.error = 'Invalid credentials.';
                    })
                };

                $scope.signup = function () {
                    var formData = {
                        grant_type: 'password',
                        username: $scope.email,
                        password: $scope.password
                    };

                    Auth.signup(formData, successAuth, function (res) {
                        $rootScope.error = res.error || 'Failed to sign up.';
                    });
                };

                $scope.logout = function () {
                    Auth.logout(function () {
                        delete $localStorage.token;
                      $timeout(function () {
                      window.location = "/";
                    }, 110);
                    });
                };
                $scope.token = $localStorage.token;
                $scope.username = $localStorage.username;
                
                $scope.sortBy = 'name';
                $scope.reverse = false;
                $scope.customers = [];
            var d = new Date();
                $scope.yeardate = d.getFullYear();  
                $scope.myjson = {} ;
        $scope.addkey = function( obj, columnName, columnvalue ){
            
            obj[columnName] = columnvalue;
        } ;
       $scope.addkey($scope.myjson , "col1", "val1") ;
       $scope.addkey($scope.myjson , "col2", "val2") ;
       $scope.addkey($scope.myjson , "col3", "val3") ;
       $scope.jstring = JSON.stringify($scope.myjson) ; 
     
  }])