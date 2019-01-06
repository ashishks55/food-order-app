// cart.component.js
angular
    .module('app')
    .component('cart', {
        controller: 'CartController',
        controllerAs: 'vm',
        templateUrl: 'app/partials/cart.html'
    });