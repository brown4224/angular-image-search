var express = require('express');
var app = express();
var path = require('path');

// Server
var server =  require('http').Server(app);
var io = require('socket.io')(server);

// Paths and Ports
var port = 3000;
var staticFiles = path.join(__dirname + '/public');

app.use( express.static(staticFiles));

//Socket.io Functions
// See sockets.js
require('./sockets.js').listen(io);


server.listen(port);