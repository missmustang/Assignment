var app = angular.module('myapp', []);
app.controller('AppCtrl', function ($scope, $http) {
    console.log("hello world from controller");

    var refresh = function () {
        $http.get('/productlist/{}').success(function (response) {
            console.log("I got the data I requested");
            $scope.productlist = response;
            $scope.product = "";
        });
    };

    refresh();

    $scope.addProduct = function () {
        console.log($scope.product);
        $http.post('/productlist', $scope.product).success(function (response) {
            console.log(response);
            refresh();
        });
    };

    $scope.remove = function (id) {
        console.log(id);
        $http.delete('/productlist/' + id).success(function (response) {
            refresh();
        });
    };

    $scope.edit = function (id) {
        console.log(id);
        $http.get('/productlist/' + id).success(function (response) {
            $scope.product = response;
        });
    };

    $scope.update = function () {
        console.log($scope.product);

        $http.put('/productlist/' + $scope.product.ID, $scope.product).success(function (response) {
            refresh();
        });
    };

    $scope.find = function () {
        console.log($scope.product._id);
        search_condition = {};
        if ($scope.product.ID) {
            search_condition.ID = $scope.product.ID;
        }
        if ($scope.product.Name) {
            search_condition.Name = $scope.product.Name;
        }
        if ($scope.product.Quantity) {
            search_condition.Quantity = $scope.product.Quantity;
        }
        $http.get('/productlist/' + JSON.stringify(search_condition)).success(function (response) {
            $scope.productlist = response;
        })
    }
});