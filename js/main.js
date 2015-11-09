import angular from 'angular';

//CONTROLLER imported
import MyButtonController from './controllers/MyButtonController';

//STEP 1 FIRST CREATE A MODULE ADD TO HTML OR BODY.
angular.module('likebutton', [])

//calling controllers 2 ways
//angular.module('likebutton').controller('MyButtonController', MyButtonController); or
.controller('MyButtonController', MyButtonController);