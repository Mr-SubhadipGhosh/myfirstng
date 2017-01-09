var yourapp =  angular.module("yourapp",[]);

var myapp = angular.module("myapp",['yourapp','ngRoute']);
function conf(empProvider){
    var ll= 'english';
    empProvider.setLang(ll);
    empProvider.xyz();
    console.log('config');
}
myapp.config(routerConf);