(function () {
    'use strict';

    var apidataFactory = function($http, $localStorage,$timeout, urls) {
    
        var apifactory = {};
        
        apifactory.getSiteList = function(token,success,error) {
         return   $http({method: 'GET', url: urls.BASE_API + '/api/SiteList?Sitecode=0&Sitename=0', 
                        headers: {'Authorization': "Bearer " + $localStorage.token  }                   
                          }).success(success).error(error)    
         
         };
         apifactory.getData = function(token,success,error,call) {
             var icall = call || 'Partner=1&ClientId=TKBE&CallContext={BE_MASK:00019 ,NAME_MASK:BUILDINGLIST}'; 
         return   $http({method: 'GET', url: 'https://apps.bidvestfm.co.za/FM2GO/Telkom/api/FlexData?'+icall,
                        headers: {'Authorization': "Bearer "+$localStorage.token  }
                        
                          }).success(success).error(error)  
         
         };
      apifactory.signin = function (data2go, success, error) {
                  $http({
                        method: 'POST',
                        url: urls.BASE + '/token',
                        headers: {'Content-Type': 'application/x-www-form-urlencoded'},
                        transformRequest: function(obj) {
                            var str = [];
                            for(var p in obj)
                            str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
                            return str.join("&");
                        },
                        data: {grant_type:'password',username: data2go.username, password: data2go.password}
                  }).success(success).error(error)
                };
        
        apifactory.logout = function (success) {
                    delete $localStorage.token;
                    $timeout(function () {
                     success() ;
                    }, 110);
                    
                };
        apifactory.getCustomer = function(customerId) {
            return $http.get('/customers/' + customerId);
        };
        
        return apifactory;
    };
    
    apidataFactory.$inject = ['$http', '$localStorage', '$timeout', 'urls'];
        
    angular.module('templateApp').factory('AuthsFactory', 
                                           apidataFactory);
                                           
}());