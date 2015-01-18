angular.module("starter.services",[]).service("Ref",["FBURL",Firebase]).factory("Chats",function(){var e=[{id:0,name:"Ben Sparrow",lastText:"You on your way?",face:"https://pbs.twimg.com/profile_images/514549811765211136/9SgAuHeY.png"},{id:1,name:"Max Lynx",lastText:"Hey, it's me",face:"https://avatars3.githubusercontent.com/u/11214?v=3&s=460"},{id:2,name:"Andrew Jostlin",lastText:"Did you get the ice cream?",face:"https://pbs.twimg.com/profile_images/491274378181488640/Tti0fFVJ.jpeg"},{id:3,name:"Adam Bradleyson",lastText:"I should buy a boat",face:"https://pbs.twimg.com/profile_images/479090794058379264/84TKj_qa.jpeg"},{id:4,name:"Perry Governor",lastText:"Look at my mukluks!",face:"https://pbs.twimg.com/profile_images/491995398135767040/ie2Z_V6e.jpeg"}];return{all:function(){return e},remove:function(t){e.splice(e.indexOf(t),1)},get:function(t){for(var a=0;a<e.length;a++)if(e[a].id===parseInt(t))return e[a];return null}}}).factory("Friends",function(){var e=[{id:0,name:"Ben Sparrow",notes:"Enjoys drawing things",face:"https://pbs.twimg.com/profile_images/514549811765211136/9SgAuHeY.png"},{id:1,name:"Max Lynx",notes:"Odd obsession with everything",face:"https://avatars3.githubusercontent.com/u/11214?v=3&s=460"},{id:2,name:"Andrew Jostlen",notes:"Wears a sweet leather Jacket. I'm a bit jealous",face:"https://pbs.twimg.com/profile_images/491274378181488640/Tti0fFVJ.jpeg"},{id:3,name:"Adam Bradleyson",notes:"I think he needs to buy a boat",face:"https://pbs.twimg.com/profile_images/479090794058379264/84TKj_qa.jpeg"},{id:4,name:"Perry Governor",notes:"Just the nicest guy",face:"https://pbs.twimg.com/profile_images/491995398135767040/ie2Z_V6e.jpeg"}];return{all:function(){return e},get:function(t){return e[t]}}}).factory("Categories",["$firebase","Ref",function(e,t){var a=t.child("Categories");return e(a).$asArray()}]).factory("Auth",["$firebaseAuth","Ref",function(e,t){return e(t)}]);