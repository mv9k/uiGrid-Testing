(function(){
    'use strict';

    angular.module('homeService', [])
        .service('homeService', homeService);

    homeService.$inject = ['$http', 'uiGridConstants'];

    function homeService($http, uiGridConstants) {

        // list everything
        var hs = this;
        //hs.myGrid = { data: undefined };
        hs.myGrid = {
            data: undefined,
            enableFiltering: true,
            enableFullRowSelection: true,
            showColumnFooter: true,
            columnDefs: [
                { field: 'name' },
                { field: 'url' },
                { field: 'model', cellClass: 'model-class' },
                { field: 'manufacturer' },
                { field: 'starship_class' },
                { field: 'crew' },
                { field: 'pilots' },
                { field: 'cost_in_credits' }
            ],
            paginationPageSizes: [25, 50, 75],
            paginationPageSize: 25
        };

        getData().then(function(data){
            hs.myGrid.data = data;
        });

        // private function
        function getData() {
            //return $http.get('http://ui-grid.info/data/500_complex.json')
            return $http.get('http://swapi.co/api/starships')
                .then(function (response) {
                    response.data.results.forEach(function (row) {
                        $http.get(row.pilots[0]).then(function (resp) {
                            row.pilots = resp.data.name;
                        });
                    });
                    console.log(response.data.results[0]);
                    return response.data.results;
                });
        }

    }

}());
