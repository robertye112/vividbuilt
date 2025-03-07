var express = require("express");

var app = express();

app.use(express.static('dist'));

//make way for some custom css, js and images
app.use('/css', express.static(__dirname + '../css'));
app.use('/js', express.static(__dirname + '../js'));
app.use('/images', express.static(__dirname + '../images'));

var server = app.listen(8081, '192.168.0.205', function(){
    var port = server.address().port;
    console.log("Server started at http://localhost:%s", port);
});