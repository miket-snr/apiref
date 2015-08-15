(function() {
    
    var siteController =  function($scope, $http, $window,$localStorage,Auth)
    {
     $scope.facdata = [];
    $scope.gridOptions = {
      data: 'facdata' ,
      showFilter : true,
      enableColumnResize : true
         }
   
       $scope.getsite = function () {
                    var formData = {
                       grant_type: 'password',
                        username: '1',
                        password: '2'
                    };

          Auth.getSiteList($localStorage.token, function (result) {        
              $scope.facdata = result.SiteList;
              $scope.gridOptions.data = $scope.facdata ;
          console.log($scope.facdata[0]); }, function () {
                        $rootScope.error = 'Invalid call.';
                    })
                };
       $scope.getsite() ;
    } ;
siteController.$inject = ['$scope', '$http','$window','$localStorage','AuthsFactory'];
 
  angular.module('templateApp').controller('siteController',siteController) ;
    
}());