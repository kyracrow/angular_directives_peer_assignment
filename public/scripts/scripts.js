/**
 * Created by kyracrowston on 1/29/16.
 */
var app = angular.module('myApp', []);

app.controller('MainController', ['$scope', function($scope){
    $scope.names=['Domino', 'Mango', 'KikiMeow', 'Smokey', 'Betty', 'Scuba'];
    $scope.userId='meow';
}]);