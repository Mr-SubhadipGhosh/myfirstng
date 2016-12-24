var myapp = angular.module("myapp",[]);
function conf(empProvider){
    var ll= 'hindi';
    empProvider.setLang(ll);
    empProvider.xyz();
    console.log('config');
}
myapp.config(conf);
myapp.provider('emp', function(){
    this.lang = "";
    this.setLang = function(val){
        console.log(val);
        this.lang= val;
    };
    this.xyz= function(){};
    this.$get= function(){       
        var itemObj =  function(){
            this.test = 'en';

            this.reSetLang = function(valLang){
                this.lang = valLang;
                console.log('reset lang',this.lang);
            }
        };
        return  new itemObj();
    }
});
myapp.service('serv', function(){
    this.test = 'emp1';
});
myapp.factory('fact',function(){
return{
    test: 'emp2'
}
});
myapp.controller('mycontroller',function($scope, emp, serv, fact){    
    console.log('controller', emp.test );
    emp.reSetLang('german');
    $scope.items= [];
    $scope.saveIt = function(){
        var ifExists = $scope.items.filter(function(val){
            return val.id === $scope.idField;
        });        
        console.log(ifExists);
        if(ifExists.length>0){
            $scope.items.forEach(function(val){
                if( val.id === ifExists[0].id){
                    val.name = $scope.nameField;
                    val.addr = $scope.addrField;
                }
            });       
        }
        else{
            $scope.items.push({id:$scope.idField, name: $scope.nameField, addr: $scope.addrField});
            
            console.log($scope.items);
        }
        $scope.resetIt();
    };
    $scope.resetIt = function(){
        $scope.idField = '';
        $scope.nameField = '';
        $scope.addrField = '';
    };
    $scope.editIt = function(id){
        var item = $scope.items.filter(function(val){
            return val.id === id;
        });  
        
        console.log(item);
        if(item.length>0){
            $scope.idField = item[0].id;
            $scope.nameField = item[0].name;
            $scope.addrField = item[0].addr;
        }
    }
});