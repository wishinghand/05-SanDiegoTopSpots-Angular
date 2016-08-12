//bootstrap the app, calling it 'app' for simplicity
angular.module('app', []);

//new controller
angular.module('app').controller('HomeCtrl', function($scope, hotSpotsFactory){
    hotSpotsFactory.listSpots(function (topSpots) {
        $scope.hotSpots = topSpots.data;
    })
});


angular.module('app').factory('hotSpotsFactory', function($http){
    return {
        listSpots: function(response, error){
            $http({
            method: 'GET',
            url: 'topspots.json'
        }).then(response, error);
        }
    }
});