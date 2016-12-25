var yourapp =  angular.module("yourapp",[]);
var myapp = angular.module("myapp",['yourapp']);
function conf(empProvider){
    var ll= 'hindi';
    empProvider.setLang(ll);
    empProvider.xyz();
    console.log('config');
}
myapp.config(conf);