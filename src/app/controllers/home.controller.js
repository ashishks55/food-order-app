// home.controller.js
angular
    .module('app')
    .controller('HomeController', ['foodService', 'cartService', 'Notification', HomeController]);

function HomeController(foodService, cartService, Notification) {
    const vm = this;
    vm.header = 'Quron';
    vm.$onInit = onInit;
    vm.foodItems = [];
    vm.filterSelected = 0;

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

    vm.changeFilter = function(index){
        vm.filterSelected = index;
    }

    vm.addToCart = function(item){
        cartService.addToCart(item)
        Notification.primary(`${item.name} added to cart!`);
    }
}

