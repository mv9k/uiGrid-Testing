(function(){
    'use strict';

    angular.module('homeController', [])
        .controller('homeController', homeController);

    homeController.$inject = ['homeService', 'ngDialog'];

    function homeController(homeService, ngDialog) {

        // grid (and its data) are in the service for persistence
        var hc = this;
        hc.myGrid = homeService.myGrid;

        hc.openDialog = openDialog;


        function openDialog() {
            ngDialog.open({
                template: '<p>my template</p>',
                plain: true
            });
        }

    }

}());
