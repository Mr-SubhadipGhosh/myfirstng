myapp.directive('inputEx', function(){
    return {
        scope:{
            model:"=",
            label: "@"
        },
        //template:'<div style="color:red; background:yellow; width:200px">{{label}}<input type="text" ng-model="model"/></div>',
        templateUrl: './template/templateinput.html',
        controller: 'mycontroller',
        controllerAs: 'vm'
    };
});

myapp.directive('inputExTrue', function(){
    return {
        scope:true,
        template:'<div style="color:red; background:yellow; width:200px">{{label}}<input type="text" ng-model="vm.addrField"/></div>',
        // controller: 'mycontroller',
        // controllerAs: 'vm'
    };
})