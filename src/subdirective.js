module.exports =  function(){
    return {
        restrict: 'E',
        template: '<div><p>validated </p><button ng-click="vm.changeLabel()">ok</button></div>',
        scope: true,
        require:'^inputEx',
        controller: function () {
            console.log('sub ctrl' ,this);

        },
        controllerAs: 'vm',
       bindToController: true,
       link:function(scope,elemnt,attr,ctrl){
           console.log('sub',ctrl);
           scope.vm.changeLabel= ctrl.changeLabel;
       }
    };
};
