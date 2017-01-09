myapp.service('serv', function ($http, $q) {
    this.test = 'emp1';

    this.getData = function () {
        $http.get("MOCK_DATA.json")
            .then(function (response) {
                this.data = response.data;
                console.log(this.data);
            });
    };
    this.getDataPromis = function () {
        var deferred = $q.defer();
        $http.get('http://localhost:3003/info/1').then(function (data) {
                deferred.resolve(data.data);
            },function (msg, code) {
                deferred.reject(msg);
            });
        return deferred.promise;
    }
});