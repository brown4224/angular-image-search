var app = angular.module('myApp', ['socket.io']);

app.controller('image-area', ['$scope', '$socket', function ($scope, $socket) {
    $socket.emit('request-images');
    $socket.on('imageFiles', function (data) {
        console.log(data);
        // data.forEach(image){
            $scope.images = data;
            dis
        // $displayText.css('position', 'absolute');

        // }


    });

}]);