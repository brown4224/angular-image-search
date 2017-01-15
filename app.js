var express = require('express');
var app = express();
var path = require('path');
var fs  = require('fs');

// Server
var server =  require('http').Server(app);
var io = require('socket.io')(server);

// Paths and Ports
var port = 3000;
var staticFiles = path.join(__dirname + '/public');
var imagePath = path.join(staticFiles + '/images');

app.use( express.static(staticFiles));


io.sockets.on('connection',function (socket) {
   console.log('a connection occured');

    socket.on('request-images', function(callback) {
     fs.readdir(imagePath, function (err, files) {
        // console.log(files);
         socket.emit('imageFiles', files);
     } );
    });

});

server.listen(port);