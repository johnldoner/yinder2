

var app = angular.module("app", ["firebase"]);

app.constant("FBURL", "https://yinder.firebaseio.com/");

app.service("Ref", ["FBURL", Firebase]);

app.factory("Auth", ["$firebaseAuth", "Ref", function($firebaseAuth, Ref) {
  return $firebaseAuth(Ref);
}]);

app.factory("Categories", ["$firebase", "Ref", function($firebase, Ref) {
  var childRef = Ref.child('Categories');
  return $firebase(childRef).$asArray();
}]);

//purpose is to pull only the ideas under that users liked section
app.factory("LikedIdeas", ["$firebase","Ref", function($firebase,Ref) {
     return function(userId) {
        var ref = new Firebase(Ref).child("users").child("like").child(userId);
        return $firebase(ref).$asArray();
     };
}]);

app.controller("ctrl", ["$scope","$firebase","Auth","Categories","LikedIdeas", function($scope,$firebase,Auth,Categories,LikedIdeas) {

  $scope.categories = Categories;
  $scope.auth = Auth;
  $scope.FBURL = "https://yinder.firebase.com/";

    $.urlParam = function(name, url) {
      if (!url) {
       url = window.location.href;
      }
      var results = new RegExp('[\\?&]' + name + '=([^&#]*)').exec(url);
      if (!results) { 
          return undefined;
      }
      return results[1] || undefined;
    };

  var userID = $.urlParam('userid');
  var rawName = $.urlParam('name');
  var displayName = decodeURI(rawName);

  $scope.userID = userID;
  $scope.displayName = displayName;

  //The below does the following: 
  //add the userid to the idea address
  //adds the ideaId to the user address
  //adds to the counter 
  $scope.LikeIdea = function (LikeorDislike,ideaName,id) {
    var FBURL = "https://yinder.firebaseio.com/Categories/"+Categories.$keyAt(id);
    var IdeaRef = new Firebase(FBURL + "/" + LikeorDislike);
    var IdeaData = $firebase(IdeaRef);
    $scope.IdeaAttributes = IdeaData.$asArray();
    $scope.IdeaAttributes.$add({
        userId: $scope.userID,
        userName: $scope.displayName,
        timestamp: Date.now()
      });

    var likeRef = new Firebase(FBURL + "/likes");
    likeRef.transaction(function(current_val) {
        if( !current_val ) {
            current_val = {like: 0, dislike: 0};
        }
        current_val[LikeorDislike]++;
        return current_val;
      });

    //adds the idea to the user trunk
    //LIMITATION: This essentially duplicates the idea in the user node
    var FBURL = "https://yinder.firebaseio.com/users/"+ String($scope.userID);
    var IdeaRef = new Firebase(FBURL + "/" + likeVar);
    var IdeaData = $firebase(IdeaRef);
    $scope.IdeaAttributes = IdeaData.$asArray();
    $scope.IdeaAttributes.$add({
        ideaId: Categories.$keyAt(id),
        idea: ideaName,
        timestamp: Date.now()
      });  

    };
}]);

app.run(["$rootScope", "Auth", function($rootScope, Auth) {
  $rootScope.user = Auth.$getAuth();
}]);