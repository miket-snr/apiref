(function() {
    var dataFactory = function($http) {
    
        var factory = {};
        
        factory.getData = function() {
            return [{"searchfield":".../api/refdata",
                     "NodeKey":"refData",
                     "NodeCode":"Reference Data to Fill Dropdown Boxes etc",
                     "Department":"Operations"},
                    {"searchfield":"https://apps.bidvestfm.co.za/FM2GO/Telkom/api/SiteList?Sitecode=*&Sitename=*George*",
                     "NodeKey":"siteList",
                     "NodeCode":"Search for a list of Sites by Number or Name",
                     "Department":"Operations"},
                   {"searchfield":".../api/Flexdata",
                     "NodeKey":"FlexData",
                     "NodeCode":"Flexible Format Reference Data to Fill Dropdown Boxes etc",
                     "Department":"https://apps.bidvestfm.co.za/FM2GO/Telkom/api/FlexData?Partner=1&ClientId=CLMD&CallContext"},
                   {"searchfield":".../api/refdata",
                     "NodeKey":"refData",
                     "NodeCode":"Reference Data to Fill Dropdown Boxes etc",
                     "Department":"Operations"},
                   {"searchfield":".../api/refdata",
                     "NodeKey":"refData",
                     "NodeCode":"Reference Data to Fill Dropdown Boxes etc",
                     "Department":"Operations"},
                   {"searchfield":".../api/refdata",
                     "NodeKey":"refData",
                     "NodeCode":"Reference Data to Fill Dropdown Boxes etc",
                     "Department":"Operations"},
                   {"searchfield":".../api/refdata",
                     "NodeKey":"refData",
                     "NodeCode":"Reference Data to Fill Dropdown Boxes etc",
                     "Department":"Operations"},];
        };
        
       return factory;
    };
    
    dataFactory.$inject = ['$http'];
        
    angular.module('templateApp').factory('dataFactory', 
                                          dataFactory);
                                           
}());