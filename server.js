var express = require("express");
var app = express();
const server = app.listen(8000);
var io = require('socket.io').listen(server);
var color = '';
io.sockets.on('connection', function(socket) {
    socket.on("bluebut", function(){
        color = "blue";
        io.emit('serverResponse', color);
    });

    socket.on("redbut", function(){
        color = "red";
        io.emit('serverResponse', color);
    });

    socket.on("greenbut", function(){
        color = "green";
        io.emit('serverResponse', color);
    });
    
})

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/static'));

app.get('/', function(req, res) {
    res.render('index')
})






