// cart.service.js
angular
    .module('app')
    .factory('cartService', CartService);

function CartService() {

    const s = this;
    s.cart = [];
    s.qty = {};
    s.totalItems = {count:0};
    
    function getCart() {
        return s.cart
    }

    function putCart(){
        localStorage.cart = JSON.stringify(this.cart)
    }

    function clearCart(){
        s.cart = [];
        s.qty = {};
        s.totalItems = {count:0};
    }

    function addToCart(item){
        if(!s.qty[item.id]){
            s.qty[item.id] = 1;
            s.cart.push(item);
        }
        else
            s.qty[item.id] += 1;
        getcartTotalItems();
    }

    function getcartTotalItems(){
        let totalItems = 0;
        s.cart.forEach((item) => {
            totalItems += s.qty[item.id]
        })
        s.totalItems.count = totalItems;
        return s.totalItems;
    }

    function decreaseQty(index, id){
        if(s.qty[id] === 1){
            s.cart.splice(index,1);
            s.qty[id] = 0;
        }
        else{
            s.qty[id] -= 1;
        }
        getcartTotalItems()
    }

    function increaseQty(id){
        s.qty[id] += 1;  
        getcartTotalItems()
    }

    function calculateCartTotal(){
        let totalCost = 0;
        s.cart.forEach((item) => {
            totalCost += s.qty[item.id] * item.price;
        })
        return totalCost;
    }

    function getQty(){
        return s.qty
    }

    return {
        getCart: getCart,
        putCart: putCart,
        addToCart: addToCart,
        decreaseQty: decreaseQty,
        increaseQty: increaseQty,
        clearCart: clearCart,
        calculateCartTotal: calculateCartTotal,
        getcartTotalItems: getcartTotalItems,
        getQty: getQty
    };

}