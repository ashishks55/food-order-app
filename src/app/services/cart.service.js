// cart.service.js
angular
    .module('app')
    .factory('cartService', CartService);

function CartService() {

    this.cart = []
    
    function getCart() {
        return this.cart
    }

    function putCart(){
        localStorage.cart = JSON.stringify(this.cart)
    }

    function clearCart(){

    }

    function addToCart(item){
        this.cart.push(item)
    }

    function removeFromCart(id){

    }

    function calculateCartTotal(){

    }

    function placeOrder(){
        console.log('placed')
    }

    return {
        getCart: getCart,
        putCart: putCart,
        addToCart: addToCart,
        removeFromCart: removeFromCart,
        clearCart: clearCart,
        calculateCartTotal: calculateCartTotal,
        placeOrder: placeOrder
    };

}