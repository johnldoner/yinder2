<ion-view view-title="Status" class="status">
  <ion-pane ng-controller="userCtrl"><!--ng-controller="CardsCtrl"-->

  <iframe style="border:none" width="100%" height="100%" src="../www/explore/?userid=<?php echo $_COOKIE['fb_id']; ?>&name=<?php echo $_COOKIE['fb_name']; ?>" />



  </ion-pane>
</ion-view>
