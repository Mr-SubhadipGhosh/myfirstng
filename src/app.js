var yourapp =  angular.module("yourapp",[]);
var routerConf = require('./routing');
var addctrl = require('./addcontroller');
var listctrl = require('./listcontroller');
var inputex = require('./directive');
var fact = require('./factory');
var convert = require('./filter');
var emp=require('./provider');
var serv = require('./service');
var myapp = angular.module("myapp",['yourapp','ngRoute']);
function conf(empProvider){
    var ll= 'english';
    empProvider.setLang(ll);
    empProvider.xyz();
    console.log('config');
}
myapp.config(routerConf);

myapp.controller('addctrl',addctrl);
myapp.controller('listctrl',listctrl);
myapp.directive('inputEx',inputex);
myapp.factory('fact',fact);
myapp.filter('convert',convert);
myapp.provider('emp',emp);
myapp.service('serv',serv);
