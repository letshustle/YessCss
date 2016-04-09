angular.module('app')
    .controller('homeCtrl', function($scope, $http) {

        $scope.setup = function() {
            $scope.topLeft = 0;
            $scope.topRight = 0;
            $scope.bottomRight = 0;
            $scope.bottomLeft = 0;
        }

        $scope.setup();



    })
