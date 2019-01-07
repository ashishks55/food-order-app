// food.service.js
angular
    .module('app')
    .service('foodService', ['$http', FoodListService]);

function FoodListService($http) {

    this.getFoodList = function() {
         return $http
            .get(`./food.json`)
            .then(response => response.data);
    }

}