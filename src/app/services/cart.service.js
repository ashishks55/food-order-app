// cart.service.js
angular
    .module('app')
    .service('cartService', CartService);

function CartService() {

    this.cart = [];
    this.qty = {};
    this.totalItems = {count:0};
    
    this.getCart= function() {
        return this.cart
    }

    this.putCart = function(){
        localStorage.cart = JSON.stringify(this.cart)
    }

    this.clearCart= function(){
        this.cart = [];
        this.qty = {};
        this.totalItems = {count:0};
    }

    this.addToCart = function(item){
        if(!this.qty[item.id]){
            this.qty[item.id] = 1;
            this.cart.push(item);
        }
        else
            this.qty[item.id] += 1;
        this.getcartTotalItems();
    }

    this.getcartTotalItems = function(){
        let totalItems = 0;
        this.cart.forEach((item) => {
            totalItems += this.qty[item.id]
        })
        this.totalItems.count = totalItems;
        return this.totalItems;
    }

    this.decreaseQty = function(index, id){
        if(this.qty[id] === 1){
            this.cart.splice(index,1);
            this.qty[id] = 0;
        }
        else{
            this.qty[id] -= 1;
        }
        this.getcartTotalItems()
    }

    this.increaseQty = function(id){
        this.qty[id] += 1;  
        this.getcartTotalItems()
    }

    this.calculateCartTotal = function(){
        let totalCost = 0;
        this.cart.forEach((item) => {
            totalCost += this.qty[item.id] * item.price;
        })
        return totalCost;
    }

    this.getQty = function(){
        return this.qty
    }

}