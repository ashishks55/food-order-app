// home.component.js
angular
    .module('app')
    .component('home', {
        controller: 'HomeController',
        controllerAs: 'vm',
        templateUrl: 'app/partials/home.html'
    });

