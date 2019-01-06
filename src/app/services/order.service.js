// order.service.js
angular
    .module('app')
    .factory('orderService', OrderService);

function OrderService() {

    this.orderHistory = [{
        orderID : 1,
        orderItems: [],
        totalCost: 500,
        status: 'completed'
    }]

    function getOrderHistory() {
        
    }

    function placeOrder(order){

    }

    return {
        getOrderHistory: getOrderHistory,
        placeOrder: placeOrder
    };

}