module.exports =  function(){
    return {
        restrict: 'E',
        scope:{
            model:"=",
            label: "="
        },
        templateUrl: './templateinput.html',
        controller: function(){
           console.log('ctrl',this);
            this.changeLabel= function() {
                console.log('tttttt');
                this.label =  this.label+ " is required.";
            }
         }, 
        controllerAs: 'vm',
        bindToController: true,
        transclude: true,
        link: function(scope, element, attr){
            console.log('link',scope.label);
            element.css({'border':"solid 5px yellow",'color':"yellow"});
        }
    };
};
