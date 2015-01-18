angular.module('starter.controllers', ['ionic', 'ionic.contrib.ui.cards', 'firebase'])

.controller('testCtrl', function($scope) {})

.controller('DashCtrl', function($scope) {})
//inside the toggle menu
.controller('MessageCtrl', function($scope) {

 $scope.showForm = true;

  $scope.shirtSizes = [
    { text: 'Large', value: 'L' },
    { text: 'Medium', value: 'M' },
    { text: 'Small', value: 'S' }
  ];

  $scope.attendee = {};
  $scope.submit = function() {
    if(!$scope.attendee.firstname) {
      alert('Info required');
      return;
    }
    $scope.showForm = false;
    $scope.attendees.push($scope.attendee);
  };

})
.controller('SettingsCtrl', function($scope) {

    $scope.activity = [];
  $scope.arrivedChange = function(attendee) {
    var msg = attendee.firstname + ' ' + attendee.lastname;
    msg += (!attendee.arrived ? ' has arrived, ' : ' just left, ');
    msg += new Date().getMilliseconds();
    $scope.activity.push(msg);
    if($scope.activity.length > 3) {
      $scope.activity.splice(0, 1);
    }
  };
})
.controller('menuCtrl', function($scope, $ionicSideMenuDelegate) {
  $scope.attendees = [
    { firstname: 'Nicolas', lastname: 'Cage' },
    { firstname: 'Jean-Claude', lastname: 'Van Damme' },
    { firstname: 'Keanu', lastname: 'Reeves' },
    { firstname: 'Steven', lastname: 'Seagal' }
  ];

  $scope.toggleLeft = function() {
    $ionicSideMenuDelegate.toggleLeft();
  };
})


.controller('ChatsCtrl', function($scope, Chats) {
  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
};
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('ProfileCtrl', ['$scope', '$firebase', function($scope, $firebase) {
  $scope.settings = {
    enableFriends: true
  };

  $scope.name = $scope.user && $scope.user.facebook.displayName || 'Not logged in';
  $scope.profilePic = $scope.user ? 'https://graph.facebook.com/' +
    $scope.user.facebook.id + '/picture?type=normal' :
    '';

  $scope.launchVideo = function() {
    function captureSuccess(mediaFiles) {
      var mediaFile = mediaFiles[0];
      var userVideos = $firebase.child("user_videos");
      userVideos.child($scope.name).set({
        video: mediaFile
      });
    }

    function captureFailure() {
      // Warn user about failed video capture
    }

    var options = {
      limit: 1,
      duration: 5
    };

    navigator.device.capture.captureVideo(captureSuccess, captureFailure, options);
  };

  $scope.pushNotificationChange = function () {
    console.log('Push Notification Change', $scope.pushNotification.checked);
  };

  $scope.pushNotification = {
    checked: true
  };
}])
/*
>>>>>>> origin/master

/*
.controller('EventCtrl', function($scope, $stateParams, Eventcategorys) {
  $scope.eventcategory = Eventcategorys.get($stateParams.categorys);
})

*/
.controller('EventCtrl', function($scope) {

 $scope.devList = [
    {
      text: "Running",
      checked: true
    },
    {
      text: "Museums",
      checked: false
    },
        {
      text: "Hiking",
      checked: false
    },
        {
      text: "Concerts",
      checked: false
    },
        {
      text: "Hiking",
      checked: false
    },
            {
      text: "Singing",
      checked: false
    },

    {
      text: "Shopping",
      checked: false
    }
  ];

})


/*
  $scope.pushNotificationChange = function () {
    console.log('Push Notification Change', $scope.pushNotification.checked);
  };

  $scope.pushNotification = {
    checked: true
  };
  $scope.emailNotification = 'Subscribed';
*/


.controller('CardsCtrl', ["$scope", "$firebase", "$ionicSwipeCardDelegate", function($scope, $firebase, $ionicSwipeCardDelegate) {

  var Ref = new Firebase("https://yinder.firebaseio.com/Categories");
  $scope.cardTypes = $firebase(Ref).$asArray();

  $scope.cards = Array.prototype.slice.call($scope.cardTypes, 0, 0);

  $scope.cardSwiped = function(index) {
    $scope.addCard();
  };

  $scope.cardDestroyed = function(index) {
    $scope.cards.splice(index, 1);
  };

  $scope.addCard = function() {
    var newCard = $scope.cardTypes[Math.floor(Math.random() * $scope.cardTypes.length)];
    newCard.id = Math.random();
    $scope.cards.push(angular.extend({}, newCard));
};
}])

.controller('CardCtrl', function($scope, $ionicSwipeCardDelegate) {
  $scope.goAway = function() {
    var card = $ionicSwipeCardDelegate.getSwipeableCard($scope);
    card.swipe();
  };
})

.controller("LoginCtrl", ["$scope", "$firebase", "Auth", function($scope, $firebase, Auth) {
  $scope.auth = Auth;

  function AuthHandler(error, authData) {
    if (error) {
      console.log("Login failed!", error);
    } else {
      console.log("Authenticated successfully with payload: " + authData);
      window.location.hash = "/tab/dash";
    }
  }

  $scope.FacebookLogin = function() {
    $scope.auth.$authWithOAuthPopup('facebook', AuthHandler);
  };

  $scope.logout = function() {
    $scope.auth.$unauth();
    window.setTimeout(function() {
      window.location.replace("/");
    }, 500);
  };

}]);
