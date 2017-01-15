//This will interact with Angular and allow us
//To abstract our functions

var module = angular.module('socket.io', []);

module.factory('$socket', ['$rootScope', function $socketFactory ($rootScope) {
    var socket = io.connect();
    return{
        on: function (eventName, callback) {
            socket.on(eventName, function () {
               var args = arguments;
               $rootScope.$apply(function () {
                  callback.apply(socket, args);
               });
            });
        },
        emit: function (eventName, callback) {
            if (typeof callback == 'function'){
                var arg = arguments;
                $rootScope.$apply(function () {
                    callback.apply(socket, arg);
                });
            } else {
                socket.emit(eventName);
            }
        }
    };
}]);