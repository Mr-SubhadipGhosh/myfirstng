function routerConf($routeProvider, $locationProvider){
$locationProvider.hashPrefix('');
$routeProvider
    .when("/edit/:ID", {
        templateUrl : "./template/templateform.html"
    })
    .when("/add", {
        templateUrl : "./template/templateform.html"
    })
    .when("/list", {
        templateUrl : "./template/templatelist.html"
    })
    .otherwise({
        redirectTo: '/add'
      });
}