(function() {
    'use strict';

    angular
        .module('app')
        .factory('topSpotsFactory', topSpotsFactory);

    topSpotsFactory.$inject = ['$http', '$q'];

    /* @ngInject */
    function topSpotsFactory($http, $q) {
        var service = {
            create: create,
            read: read,
            update: update,
            delete: deletePlace
        };

        return service;

        ////////////////

        //Post
        function create(topSpot) {
            var defer = $q.defer();
            
            $http({
                method: 'POST',
                url: 'http://localhost:51431/api/TopSpots'
                data: topSpot
            }).then(function(response){
                defer.resolve(response.data);
            }), function(response){
                defer.reject("Could not create new Top Spot");
            }
        }

        //Get
        function read() {
            var defer = $q.defer();

            $http({
                method: 'GET',
                url: 'http://localhost:51431/api/TopSpots'
            }).then(function(response){
                defer.resolve(response.data);
            },function(response) {
                defer.reject("Location not found");
            });

            return defer.promise;
        }

        //Put
        function update() {
        }

        //Delete
        function deletePlace() {
        }
    }
})();