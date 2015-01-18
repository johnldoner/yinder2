angular.module('starter.controllers', ['ionic', 'ionic.contrib.ui.cards', 'firebase'])

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
}])
/*

.controller('EventCtrl', function($scope, $stateParams, Eventcategorys) {
  $scope.eventcategory = Eventcategorys.get($stateParams.categorys);
})
*/

.controller('CardsCtrl', ["$scope", "$firebase", "$ionicSwipeCardDelegate","Categories", function($scope, $firebase, $ionicSwipeCardDelegate,Categories) {
  var Ref = new Firebase("https://yinder.firebaseio.com/Categories");
  
  $scope.categories = Categories;


  $scope.cardTypes = $firebase(Ref).$asArray();



  $scope.cards = Array.prototype.slice.call($scope.cardTypes, 0, 0);


  $scope.cards.forEach(function (d, index) {
      d.Index = index + 1;
  });

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

.controller('CardCtrl', function($scope,$firebase,$ionicSwipeCardDelegate,Categories) {
  $scope.goAway = function(id,LikeorDislike) {
    var card = $ionicSwipeCardDelegate.getSwipeableCard($scope);
    card.swipe();
  
    alert(Categories.$keyAt(parseInt(id)-1))

    var FBURL = "https://yinder.firebaseio.com/Categories/"+Categories.$keyAt(parseInt(id)-1);
    var IdeaRef = new Firebase(FBURL + "/" + LikeorDislike);
    var IdeaData = $firebase(IdeaRef);
    $scope.IdeaAttributes = IdeaData.$asArray();
    $scope.IdeaAttributes.$add({
        userId: $scope.user.facebook.id,
        userName: $scope.user.facebook.displayName,
        timestamp: Date.now()
      });






  };
})

.controller("LoginCtrl", ["$scope", "$firebase", "Auth", function($scope, $firebase, Auth) {
  $scope.auth = Auth;

  function AuthHandler(error, authData) {
    if (error) {
      console.log("Login failed!", error);
    } else {
      console.log("Authenticated successfully with payload: " + authData);
      document.cookie="fb_id=$scope.user.facebook.id";
      document.cookie="fb_name=$scope.user.facebook.displayName";
      window.location.hash = "/tab/dash";
    }
  }

  $scope.FacebookLogin = function() {
    $scope.auth.$authWithOAuthPopup('facebook', AuthHandler)();
  };

  $scope.logout = function() {
    $scope.auth.$unauth();
    window.setTimeout(function() {
      window.location.replace("/");
    }, 500);
  };

}]);