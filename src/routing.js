function routerConf($routeProvider, $locationProvider){
$locationProvider.hashPrefix('');
$routeProvider
    .when("/add/:ID", {
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