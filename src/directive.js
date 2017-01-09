myapp.directive('inputEx', function(){
    return {
        scope:{
            model:"=",
            label: "@"
        },
        template:'<div style="color:red; background:yellow; width:200px">{{label}}<input type="text" ng-model="model"/></div>',
        controller: 'mycontroller',
        controllerAs: 'vm'
    };
})