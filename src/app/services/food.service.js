// food.service.js
angular
    .module('app')
    .service('foodService', ['$http', FoodService]);

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