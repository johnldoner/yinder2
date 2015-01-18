angular.module('starter.controllers', ['ionic', 'ionic.contrib.ui.cards'])

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

  $scope.name = 'Kevin Ji';
  $scope.profile_pic = 'https://pbs.twimg.com/profile_images/451007105391022080/iu1f7brY_400x400.png';
})

.controller('CardsCtrl', function($scope, $ionicSwipeCardDelegate) {
  var cardTypes = [{
    title: 'Swipe down to clear the card',
    image: 'img/pic.png'
  }, {
    title: 'Where is this?',
    image: 'img/pic.png'
  }, {
    title: 'What kind of grass is this?',
    image: 'img/pic2.png'
  }, {
    title: 'What beach is this?',
    image: 'img/pic3.png'
  }, {
    title: 'What kind of clouds are these?',
    image: 'img/pic4.png'
  }];

  $scope.cards = Array.prototype.slice.call(cardTypes, 0, 0);

  $scope.cardSwiped = function(index) {
    $scope.addCard();
  };

  $scope.cardDestroyed = function(index) {
    $scope.cards.splice(index, 1);
  };

  $scope.addCard = function() {
    var newCard = cardTypes[Math.floor(Math.random() * cardTypes.length)];
    newCard.id = Math.random();
    $scope.cards.push(angular.extend({}, newCard));
  }
})

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
