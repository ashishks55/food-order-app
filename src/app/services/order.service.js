// order.service.js
angular
    .module('app')
    .factory('orderService', OrderService);

function OrderService() {

    function getOrderHistory() {
        
    }

    function placeOrder(order){

    }

    return {
        getOrderHistory: getOrderHistory,
        placeOrder: placeOrder
    };

}