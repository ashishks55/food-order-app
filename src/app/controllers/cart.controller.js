// cart.controller.js
angular
    .module('app')
    .controller('CartController', CartController);

function CartController(cartService, Notification) {
    const vm = this;
    vm.$onInit = onInit;
    vm.cartOpen = false;
    vm.cartItems = [];
    vm.totalItems = 0;
    vm.itemQuantity = {};

    activate();

    function activate() {
        // Resolve start-up logic
        vm.totalItems = cartService.getcartTotalItems()
        vm.cartItems = cartService.getCart();
        vm.itemQuantity = cartService.getQty();
    }

    function onInit() {
        // Initialization logic that relies on bindings being present
        // should be put in this method, which is guarranteed to
        // always be called after the bindings have been assigned.
    }

    vm.openCart = function(){
        vm.cartOpen = true;
    }

    vm.closeCart = function(){
        vm.cartOpen = false;
    }

    vm.placeOrder = function(){
        vm.closeCart();
        cartService.placeOrder();
        vm.clearCart();
        Notification.success('Order will be delivered in 30 mins! click Order History for more details.');
    }

    vm.clearCart = function(){
        cartService.clearCart();
        activate();
        vm.closeCart();
    }
}