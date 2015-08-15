( function() {

    var autocontroller = function($scope, $filter ,dataFactory) {
    
    $scope.handle = '';
        $scope.myTitle = 'Testing' ;
    
    $scope.lowercasehandle = function() {
        return $filter('lowercase')($scope.handle);
    };
    $scope.searchBox = '' ;
    $scope.characters = 5;
    console.log('in auto ') ;
    $scope.nodeData = dataFactory.getData() ;
 
     } ;
    
    
  autocontroller.$inject = ['$scope', '$filter','dataFactory'];
 
  angular.module('templateApp').controller('AutoController',autocontroller) ;


})();