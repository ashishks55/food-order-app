// order.service.js
angular
    .module('app')
    .factory('orderService', OrderService);

function OrderService() {

    const s = this;

    s.orderHistory = [{
        orderID : 1,
        orderItems: [{id: 3, name: "Penne Pasta", qty: 2, price: 150},{id: 4, name: "Salami Pasta", qty: 1, price: 200}],
        totalCost: 500,
        status: 'cancelled'
    }]

    if(!localStorage.orders){
        saveOrderHistory();
    }
    else{
        getOrderHistoryFromStorage();
    }

    function getOrderHistory() {
        return s.orderHistory
    }

    function getOrderHistoryFromStorage(){
        s.orderHistory = JSON.parse(localStorage.orders);
    }

    function saveOrderHistory(){
        localStorage.orders = JSON.stringify(s.orderHistory);
    }

    function placeOrder(items, qty, cost){
        let orderItems = [];
        items.forEach((item) => {
            orderItems.push({id: item.id, name: item.name, qty: qty[item.id], price: item.price});
        })
        s.orderHistory.unshift({orderID: s.orderHistory[0].orderID + 1, orderItems: orderItems, totalCost: cost, status:'completed'});
        saveOrderHistory();
    }

    return {
        getOrderHistory: getOrderHistory,
        placeOrder: placeOrder
    };

}