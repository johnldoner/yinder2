angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {})

.controller('ChatsCtrl', function($scope, Chats) {
  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  }
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

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
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
