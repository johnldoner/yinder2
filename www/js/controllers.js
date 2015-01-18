angular.module('starter.controllers', ['ionic', 'ionic.contrib.ui.cards','firebase'])

.controller('DashCtrl', function($scope) {})

.controller('ChatsCtrl', function($scope, Chats) {
  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
};
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('FriendsCtrl', function($scope, Friends) {
  $scope.friends = Friends.all();
})

.controller('FriendDetailCtrl', function($scope, $stateParams, Friends) {
  $scope.friend = Friends.get($stateParams.friendId);
})

.controller('ProfileCtrl', function($scope) {
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
      // Save video
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
})
/*

.controller('EventCtrl', function($scope, $stateParams, Eventcategorys) {
  $scope.eventcategory = Eventcategorys.get($stateParams.categorys);
})
*/

.controller('CardsCtrl',["$scope","$firebase","$ionicSwipeCardDelegate", function($scope,$firebase, $ionicSwipeCardDelegate) {
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
  }
}])

.controller('CardCtrl', function($scope, $ionicSwipeCardDelegate) {
  $scope.goAway = function() {
    var card = $ionicSwipeCardDelegate.getSwipeableCard($scope);
    card.swipe();
  };
})

.controller("LoginCtrl", ["$scope","$firebase","Auth", function($scope,$firebase,Auth) {
  $scope.auth = Auth;
  $scope.FBURL = "https://crowdfluttr.firebase.com/";

      function AuthHandler(error, authData) {
      if (error) {
        console.log("Login Failed!", error);
      } else {
        console.log("Authenticated successfully with payload:" + authData);
          window.setTimeout(function(){
              // window.location.reload();
              window.location.href = "home-B.html";
              console.log(user.facebook.displayName);
          }, 1000);
      }
    }

  $scope.FacebookLogin = function () {
    $scope.auth.$authWithOAuthRedirect('facebook', AuthHandler())(); //Need to have empty parenthesis for login to be called
    console.log(user.facebook.displayName);
    var ref = new Firebase(FBURL);
    var userPath = ref.child("users").child($scope.user.facebook.id);
    var loginCountPath = userPath.child("loginCount");
    loginCountPath.transaction(increment(count));
    window.location.href = "explore.html";
  };

  $scope.logout = function () {
    $scope.auth.$unauth();
    window.setTimeout(function(){
        // window.location.reload();
        window.location.href = "/";
    }, 500);

  };

}]);
