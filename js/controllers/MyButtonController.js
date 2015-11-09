//STEP 2 CREATE CONTROLLER AND BIND TO HTML
let MyButtonController = function($scope){
  $scope.revCount;
  $scope.count =0;
  $scope.msg ='likes';

  $scope.Counter=function(){
    $scope.count ++;
    $scope.msg=($scope.count === 1) ? "like" :"likes";
    // return revCount = count;
  };

    // $scope.ReverseCounter = function(){
        
    //     $scope.revCount = $scope.Counter();

    // };

}

//STEP 3 will have the dependencies [] which will be put in html
MyButtonController.$inject=['$scope'];



export default MyButtonController;