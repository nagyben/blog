angular.module('exantas-blog')
  .config(function($stateProvider, $urlRouterProvider, $locationProvider) {
    $stateProvider
    .state("home", {
      url: '/',
      views: {
        'navigation': {
          templateUrl: 'nav.html'
        },
        'content': {
          templateUrl: ''
        }
      }
    })
    .state("arduino-lights-1", {
      url: '/arduino-lights-1',
      views: {
        'navigation': {
          templateUrl: 'nav.html'
        },
        'content': {
          templateUrl: 'pages/arduino-lights/arduino-1.html'
        }
      }
    })
    .state("arduino-lights-2", {
      url: '/arduino-lights-2',
      views: {
        'navigation': {
          templateUrl: 'nav.html'
        },
        'content': {
          templateUrl: 'pages/arduino-lights/arduino-2.html'
        }
      }
    });

    $urlRouterProvider.otherwise('/');
    $locationProvider.html5Mode(true);
  });
