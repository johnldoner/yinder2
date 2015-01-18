// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers', 'starter.services', 'firebase'])
//add
//angular.module('starter1', ['ionic', 'starter1.controllers', 'starter1.services', 'firebase'])

.constant("FBURL", "https://yinder.firebaseio.com/")

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider, $locationProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
  
  // setup an abstract state for the tabs directive
  .state('tab', {
    url: "/tab",
    abstract: true,
    templateUrl: "templates/tabs.html"
  })

  // Each tab has its own nav history stack:

  .state('tab.dash', {
    url: '/dash',
    views: {
      'tab-dash': {
        templateUrl: 'templates/tab-dash.html',
        controller: 'DashCtrl'
      }
    }
  })

  .state('tab.chats', {
      url: '/chats',
      views: {
        'tab-chats': {
          templateUrl: 'templates/tab-chats.html',
          controller: 'ChatsCtrl'
        }
      }
    })
    .state('tab.chat-detail', {
      url: '/chats/:chatId',
      views: {
        'tab-chats': {
          templateUrl: 'templates/chat-detail.html',
          controller: 'ChatDetailCtrl'
        }
      }
    })

  .state('tab.profile', {
    url: '/profile',
    views: {
      'tab-profile': {
        templateUrl: 'templates/tab-profile.html',
        controller: 'ProfileCtrl'
      }
    }
  })


  .state('tab.interests', {
    url: '/interests',
    views: {
      'tab-interests': {
        templateUrl: 'templates/tab-interests.html',
        controller: 'CardsCtrl'
      }
    }
  })

  .state('tab.login', {
    url: '/login',
    views: {
      'tab-login': {
        templateUrl: 'templates/login.html',
        controller: 'LoginCtrl'
      }
    }
  })

  .state('tab.select', {
    url: '/select',
    views: {
      'tab-select': {
        templateUrl: 'templates/selectevent.html',
        controller: 'EventCtrl'
      }
    }
  })

 .state('eventmenu', {
      url: '/event',
      templateUrl: 'templates/event-menu.html',
       controller: 'menuCtrl' 
    })
/*
 .state('forgotpassword', {
      url: "/forgot-password",
      templateUrl: "forgot-password.html"
    })
*/

     .state('eventmenu.home', {
      url: "/home",
      views: {
        'menuContent' :{
          templateUrl: "home.html"
        }
      }
    })
         .state('eventmenu.message', {
      url: "/message",
      views: {
        'menuContent' :{
          templateUrl: "message.html",
          controller: "MessageCtrl"
        }
      }
    })
    .state('eventmenu.settings', {
      url: "/settings",
      views: {
        'menuContent' :{
          templateUrl: "settings.html",
          controller: "SettingsCtrl"
        }
      }
    })
         /*
    .state('eventmenu.settings', {
      url: "/settings",
      views: {
        'menuContent' :{
          templateUrl: "settings.html",
          controller: "SettingsCtrl"
        }
      }
    }*/
//add content for testing

  ;


  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/tab/login');
})

.run(["$rootScope", "Auth", function($rootScope, Auth) {
  $rootScope.user = Auth.$getAuth();
}]);
