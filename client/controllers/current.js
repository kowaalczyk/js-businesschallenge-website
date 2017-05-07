var hsbc = angular.module('Hsbc');

hsbc.controller('CurrentController', ['$scope', '$http', '$location', '$routeParams', function($scope, $http, $location, $routeParams) {
    console.log('Current edition controller is loaded.');

    $scope.portraitPath = "img/";
    $scope.partnerPath = "img/partners/";
    $scope.teamPath = "img/";
}]);
