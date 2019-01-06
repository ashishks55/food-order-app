// cart.controller.js
angular
    .module('app')
    .controller('HistoryController', HistoryController);

function HistoryController(orderService) {
    const vm = this;
    vm.$onInit = onInit;
    vm.orderHistory = []

    activate();

    function activate() {
        // Resolve start-up logic
        vm.orderHistory = orderService.getOrderHistory();
    }

    function onInit() {
        // Initialization logic that relies on bindings being present
        // should be put in this method, which is guarranteed to
        // always be called after the bindings have been assigned.
    }


}