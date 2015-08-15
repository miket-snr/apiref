(function() {
    
    var refDataController =  function($scope, $http, $window,$localStorage,Auth)
    {
        $scope.values = [{
         id: 1,
         label: 'Telkom Site List Search By Number',
         subItem: { name: 'Partner=1&ClientId=TKBE&CallContext={BE_MASK:*19* ,NAME_MASK: }' }
        }, {
 id: 2,
         label: 'Telkom Site List Search By Name Wildcard',
         subItem: { name: 'Partner=1&ClientId=TKBE&CallContext={BE_MASK:  ,NAME_MASK:*Ge*}' }
        }, {
         id: 3,
         label: 'Telkom Building List By Site Number',
         subItem: { name: 'Partner=1&ClientId=TKBE&CallContext={BE_MASK:00019 ,NAME_MASK:BUILDINGLIST}' }
        }, {
         id: 4,
         label: 'Telkom Site List Search By Number',
         subItem: { name: 'Partner=1&ClientId=TKBE&CallContext={BE_MASK:00019 ,NAME_MASK:BUILDINGLIST}' }
        }, {
         id: 5,
         label: 'SAB List of Notifications for CLEAning',
         subItem: { name: 'Partner=1&ClientId=SBNO&CallContext={GROUP:STB-CLEA}' }
        }, {
         id: 6,
        label: 'SAB List of Notifications for BINC',
         subItem: { name: 'Partner=1&ClientId=SBNO&CallContext={GROUP:STB-BINC}' }
        }, {
         id: 7,
         label: 'Growthpoint List of Notifications',
         subItem: { name: 'Partner=1&ClientId=GPNO&CallContext={WERKS:GP00,LOCATION:GP00A,PL_SECTION:G01}' }
        }   ];

$scope.selected = { name: 'Partner=1&ClientId=TKBE&CallContext={BE_MASK:*19* ,NAME_MASK: }' };
        
     $scope.facdata = [];
    $scope.gridOptions = {
      data: 'facdata' ,
      showFilter : true,
      enableColumnResize : true
         }
   
       $scope.getdata = function () {
                    var formData = {
                       grant_type: 'password',
                        username: '1',
                        password: '2'
                    };

          Auth.getData($localStorage.token, function (result) {
          $scope.facdata = [];

              for (var i = 0 ; i< result.ServicesList.length ; i++ ) {
              if ( i > 0 ) { break } ;
                var tempobj = JSON.parse(result.ServicesList[i].JsonsetJstext);
                $.each(tempobj, function(key, value) {
                     var intobj = {} ; intobj.key = key ; intobj.value = value;
                     $scope.facdata.push(intobj);
                }) ;
              };
       //       $scope.gridOptions.data = facdata ;
          console.log($scope.facdata[0]); }, function () {
                        $rootScope.error = 'Invalid call.';
                    },$scope.selected.name)
                };
       $scope.getdata() ;
    } ;
refDataController.$inject = ['$scope', '$http','$window','$localStorage','AuthsFactory'];
 
  angular.module('templateApp').controller('refDataController',refDataController) ;
    
}());

