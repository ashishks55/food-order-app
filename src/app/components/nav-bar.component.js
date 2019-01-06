// nav-bar.component.js
angular
    .module('app')
    .component('navBar', {
        controller: 'NavBarController',
        controllerAs: 'vm',
        templateUrl: 'app/partials/nav-bar.html'
    });
