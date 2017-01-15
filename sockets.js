module.exports.listen = function(io){

    var path = require('path');
    var fs  = require('fs');
    var imagePath = path.join(__dirname + '/public/images');

    io.sockets.on('connection',function (socket) {
        console.log('a connection occured');

        socket.on('request-images', function(callback) {
            fs.readdir(imagePath, function (err, files) {
                console.log(files);
                socket.emit('imageFiles', files);
            } );
        });

    });

    return io
}