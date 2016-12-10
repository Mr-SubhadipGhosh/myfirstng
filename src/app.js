var myapp = angular.module("myapp",[]);
myapp.controller('mycontroller',function($scope){
    $scope.name = "Student"; 
    $scope.nameList = [];
    $scope.clickMe = function(){
        $scope.nameList.push($scope.name);
        $scope.name = "";
    }
});