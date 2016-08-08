angular.module('app', []);

angular.module('app').controller('HomeCtrl', function($scope, $http){
    $http({
        method: 'GET',
        url: 'topspots.json'
    }).then(function successCallback(response){
        $scope.hotSpots = response.data;
    }, function errorCallback(response){

    })
});