myapp.controller('mycontroller',function($scope ,$location,emp, serv, fact){    
    var vm = this;
    //console.log('controller', emp.test );
   // emp.reSetLang('german');
    vm.items= fact.items;
    vm.val = 0;
    
    serv.getDataPromis().then(function(val){
        console.log(val);
    },function(err){
        console.log(err);
    });
    vm.saveIt = function(){
        fact.saveIt(vm);
        vm.resetIt();
        vm.val = vm.val + 1;
    };
    vm.resetIt = function(){
        vm.idField = '';
        vm.nameField = '';
        vm.addrField = '';
    };
    vm.editIt = function(id){
        $location.path('/add/'+id);
       if(id){
     var item = vm.items.filter(function(val){
            return val.id === id;
        });  
        
        console.log(item);
        if(item.length>0){
            vm.idField = item[0].id;
            vm.nameField = item[0].name;
            vm.addrField = item[0].addr;
        }
    }
    };
    $scope.$watch('vm.val', function(newval,oldval){
        console.log(oldval,newval);
    });
});