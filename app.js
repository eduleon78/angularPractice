(function () {
'use strict';

angular.module('LaunchCheck', [])
.controller('DIController', DIController);

DIController.$inject = ['$scope', '$filter'];
function DIController ($scope,
                       $filter,
                       $injector){
    $scope.name = "Eduardo";

    $scope.upper = function() {
        var upCase = $filter('uppercase');
        $scope.name = upCase($scope.name);
    };

    console.log($injector.annotate(DIController));
}

function AnnotateMe(name, job, blah){
    return "Blah!";
}

console.log(DIController.toString());

})()