var app = angular.module('myApp', ['socket.io']);

app.controller('image-area', ['$scope', '$socket', function ($scope, $socket) {
    $socket.emit('request-images');
    $socket.on('imageFiles', function (data) {
        $scope.imgUrl = 'http://localhost:3000/images/';
        $scope.images = data;
    });
}]);