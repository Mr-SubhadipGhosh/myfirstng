module.exports =  function(){
    return {
        restrict: 'E',
        scope:{
            model:"=",
            label: "@"
        },
        //template:'<div style="color:red; background:yellow; width:200px">{{label}}<input type="text" ng-model="model"/></div>',
        templateUrl: './templateinput.html',
        // controller: function($scope){
        //    // $scope.label="test";
        //     console.log('ctrl',$scope.label);

        //  },//'addctrl',//add your existing ctrl by name
        // // // controllerAs: 'vm',
        // bindToController:true,
        link: function(scope, element, attr){
            console.log('link',scope.label);
            console.log('link-el',angular.element(element).html());
            angular.element(element).css('height', '100px');
        }
    };
};
