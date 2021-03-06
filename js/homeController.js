(function(){
    'use strict';

    angular.module('homeController', [])
        .controller('homeController', homeController);

    homeController.$inject = ['homeService', 'ngDialog'];

    function homeController(homeService, ngDialog) {

        // grid (and its data) are in the service for persistence
        var hc = this;
        hc.myGrid = homeService.myGrid;

        hc.clickUrl = clickUrl;

        hc.openDialog = openDialog;

        function openDialog() {
            ngDialog.open({
                template: '<p>my template</p>',
                plain: true
            });
        }

        function clickUrl() {
            ngDialog.open({
                template:
                    '<h1>URL INFO</h1>' +
                    '<hr>' +
                    '<ul>' +
                    '<li>List item 1</li>' +
                    '<li>List item 2</li>' +
                    '<li>List item 3</li>' +
                    '</ul>',
                plain: true
            });
        }

    }

}());
