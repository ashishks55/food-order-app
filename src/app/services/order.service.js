// order.service.js
angular
    .module('app')
    .service('orderService', OrderService);

function OrderService() {

    this.orderHistory = [{
        orderID : 1,
        orderItems: [{id: 3, name: "Penne Pasta", qty: 2, price: 150},{id: 4, name: "Salami Pasta", qty: 1, price: 200}],
        totalCost: 500,
        status: 'cancelled'
    }]

    this.init = function(){
        if(!localStorage.orders){
            this.saveOrderHistory();
        }
        else{
            this.getOrderHistoryFromStorage();
        }
    }

    this.getOrderHistory = function() {
        return this.orderHistory
    }

    this.getOrderHistoryFromStorage = function(){
        this.orderHistory = JSON.parse(localStorage.orders);
    }

    this.saveOrderHistory = function(){
        localStorage.orders = JSON.stringify(this.orderHistory);
    }

    this.placeOrder = function(items, qty, cost){
        let orderItems = [];
        items.forEach((item) => {
            orderItems.push({id: item.id, name: item.name, qty: qty[item.id], price: item.price});
        })
        this.orderHistory.unshift({orderID: this.orderHistory[0].orderID + 1, orderItems: orderItems, totalCost: cost, status:'completed'});
        this.saveOrderHistory();
    }

}