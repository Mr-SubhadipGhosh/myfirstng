module.exports =  function(){
    return {
        restrict: 'E',
        scope:{
            model:"=",
            label: "@"
        },
        //template:'<div style="color:red; background:yellow; width:200px">{{label}}<input type="text" ng-model="model"/></div>',
        templateUrl: './templateinput.html',
        // controller: 'addctrl',
        // controllerAs: 'vm',
        link: function(scope, element, attr){

        }
    };
};
