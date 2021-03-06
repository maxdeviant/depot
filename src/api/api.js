'use strict';

var api = require('express')();
var server = require('http').Server(api);
var io = require('socket.io')(server);

server.listen(3000);

api.get('/', function (req, res) {
    res.sendFile(__dirname + '/index.html');
});

io.on('connection', function (socket) {
    socket.emit('news', {
        hello: 'world'
    });

    socket.on('some event', function (data) {
        console.log(data);
    });
});
