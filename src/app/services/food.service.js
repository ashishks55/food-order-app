// food.service.js
angular
    .module('app')
    .factory('foodService', FoodService);

function FoodService($http) {

    function getFoodList() {
         return $http
            .get(`./food.json`)
            .then(response => response.data);
    }

    return {
        getFoodList: getFoodList
    };

}