angular.module("starter",["ionic","starter.controllers","starter.services","firebase"]).constant("FBURL","https://crowdfluttr.firebaseio.com/").run(function(t){t.ready(function(){window.cordova&&window.cordova.plugins.Keyboard&&cordova.plugins.Keyboard.hideKeyboardAccessoryBar(!0),window.StatusBar&&StatusBar.styleDefault()})}).config(function(t,a){t.state("tab",{url:"/tab","abstract":!0,templateUrl:"templates/tabs.html"}).state("tab.dash",{url:"/dash",views:{"tab-dash":{templateUrl:"templates/tab-dash.html",controller:"DashCtrl"}}}).state("tab.chats",{url:"/chats",views:{"tab-chats":{templateUrl:"templates/tab-chats.html",controller:"ChatsCtrl"}}}).state("tab.chat-detail",{url:"/chats/:chatId",views:{"tab-chats":{templateUrl:"templates/chat-detail.html",controller:"ChatDetailCtrl"}}}).state("tab.friends",{url:"/friends",views:{"tab-friends":{templateUrl:"templates/tab-friends.html",controller:"FriendsCtrl"}}}).state("tab.friend-detail",{url:"/friend/:friendId",views:{"tab-friends":{templateUrl:"templates/friend-detail.html",controller:"FriendDetailCtrl"}}}).state("tab.account",{url:"/account",views:{"tab-account":{templateUrl:"templates/tab-account.html",controller:"AccountCtrl"}}}).state("tab.login",{url:"/login",views:{"tab-login":{templateUrl:"templates/login.html",controller:"LoginCtrl"}}}),a.otherwise("/tab/dash")}).run(["$rootScope","Auth",function(t,a){t.user=a.$getAuth()}]);