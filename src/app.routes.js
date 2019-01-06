// app.routes.js
angular.module('app')

    .config(($stateProvider, $urlRouterProvider, $locationProvider, NotificationProvider) => {
        const states = [{
            name: 'home',
            url: '',
            template: '<home></home>',
            data: {
                pageTitle: 'Home'
            }
        },
        {
            name: 'history',
            url: '/history',
            template: '<history></history>',
            data: {
                pageTitle: 'Order History'
            }
        }];
        states.forEach(state => {
            $stateProvider.state(state);
        });
        $locationProvider.html5Mode({
            enabled: true,
            requireBase: true
        });
        $urlRouterProvider.when('/', ['$state', '$match', ($state, $match) => {
            $state.go('home');
        }]);
        NotificationProvider.setOptions({
            delay: 3000,
            startTop: 65,
            startRight: 10,
            verticalSpacing: 20,
            horizontalSpacing: 20,
            positionX: 'right',
            positionY: 'top'
        });
    })