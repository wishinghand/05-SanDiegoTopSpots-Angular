//bootstrap the app, calling it 'app' for simplicity
angular.module('app', []);

//new controller
// angular.module('app').controller('HomeCtrl', function($scope, hotSpotsFactory){
//     hotSpotsFactory.listSpots(function (topSpots) {
//         $scope.hotSpots = topSpots.data;
//     })
// });

(function() {
    'use strict';

    angular
        .module('app')
        .controller('HomeCtrl', HomeCtrl);

    HomeCtrl.$inject = ['hotSpotsFactory'];

    /* @ngInject */
    function HomeCtrl(hotSpotsFactory) {
        var vm = this;
        vm.title = 'HomeCtrl';
        vm.place = {};

        activate();

        ////////////////

        function activate() {
        }
    }
})();


// angular.module('app').factory('hotSpotsFactory', function($http){
//     return {
//         listSpots: function(response, error){
//             $http({
//             method: 'GET',
//             url: 'http://localhost:51431/api/TopSpots'
//         }).then(response, error);
//         }
//     }
// });

(function() {
    'use strict';

    angular
        .module('module')
        .factory('factory', factory);

    factory.$inject = ['dependencies'];

    /* @ngInject */
    function factory(dependencies) {
        var service = {
            create: create,
            read: read,
            update: update,
            delete: delete
        };
        return service;

        ////////////////

        function create() {
        }

        function read() {
        }

        function update() {
        }

        function delete() {
        }
    }
})();