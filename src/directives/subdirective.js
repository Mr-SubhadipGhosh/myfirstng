module.exports =  function(){
    return {
        restrict: 'E',
        template: '<a>{{label}}</a>',
        scope: true,
        require:'^longLabel',
        controller: function () {
            console.log('sub ctrl' ,this);
        },
       link:function(scope,elemnt,attr,ctrl){
           console.log('sub',ctrl);
           scope.label = ctrl.info;
       }
    };
};
