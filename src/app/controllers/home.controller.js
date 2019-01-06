// home.controller.js
angular
    .module('app')
    .controller('HomeController', HomeController);

function HomeController(foodService) {
    const vm = this;
    vm.header = 'Quron';
    vm.$onInit = onInit;
    vm.foodItems = []

    activate();

    function activate() {
        // Resolve start-up logic
        foodService.getFoodList()
                .then(foodItems => {
                    vm.foodItems = foodItems;
                });
    }

    function onInit() {
        // Initialization logic that relies on bindings being present
        // should be put in this method, which is guarranteed to
        // always be called after the bindings have been assigned.
    }
}

