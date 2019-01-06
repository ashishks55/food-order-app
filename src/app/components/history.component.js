// history.component.js
angular
    .module('app')
    .component('history', {
        controller: 'HistoryController',
        controllerAs: 'vm',
        templateUrl: 'app/partials/history.html'
    });