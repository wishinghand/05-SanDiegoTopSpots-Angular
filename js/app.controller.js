(function() {
    'use strict';

    angular
        .module('app')
        .controller('HomeCtrl', HomeCtrl);

    HomeCtrl.$inject = ['topSpotsFactory'];

    /* @ngInject */
    function HomeCtrl(topSpotsFactory) {
        var vm = this;
        vm.title = 'HomeCtrl';
        vm.place = {};

        //automatically do this on load
        readPlace();

        ////////////////

        function createPlace() {
            topSpotsFactory.create(vm.place).then(function(resolve){
                //update vm
            });
        }

        function readPlace() {
            topSpotsFactory.read().then(function(resolve){
                vm.place = resolve;
            });
        }

        function updatePlace() {
            topSpotsFactory.update(vm.place);
        }

        function deletePlace() {
            topSpotsFactory.deletePlace(vm.place);
        }
    }
})();