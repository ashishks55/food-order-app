// cart.controller.js
angular
    .module('app')
    .controller('CartController',['cartService', 'Notification', 'orderService', CartController]);

function CartController(cartService, Notification, orderService) {
    const vm = this;
    vm.$onInit = onInit;
    vm.cartOpen = false;
    vm.cartItems = [];
    vm.itemQuantity = {};
    vm.totalItems = 0;
    vm.totalCost = 0;

    activate();

    function activate() {
        // Resolve start-up logic
        vm.totalItems = cartService.getcartTotalItems();
        vm.cartItems = cartService.getCart();
        vm.itemQuantity = cartService.getQty();
        orderService.init();
    }

    function onInit() {
        // Initialization logic that relies on bindings being present
        // should be put in this method, which is guarranteed to
        // always be called after the bindings have been assigned.
    }

    function calculateTotal(){
        vm.totalCost = cartService.calculateCartTotal();
    }

    vm.openCart = function(){
        calculateTotal()
        vm.cartOpen = true;
    }


    vm.closeCart = function(){
        vm.cartOpen = false;
    }

    vm.placeOrder = function(){
        if(vm.cartItems.length === 0){
          Notification.error('Cart is empty!');
          return
        }
        vm.closeCart();
        orderService.placeOrder(vm.cartItems, vm.itemQuantity, vm.totalCost);
        vm.clearCart();
        Notification.success('Order will be delivered in 30 mins! click Order History for more details.');
    }

    vm.clearCart = function(){
        cartService.clearCart();
        activate();
        vm.closeCart();
    }

    vm.increaseQty = function(id){
        cartService.increaseQty(id);
        calculateTotal();
    }

    vm.decreaseQty = function(index, id){
        cartService.decreaseQty(index, id);
        calculateTotal();
    }
}