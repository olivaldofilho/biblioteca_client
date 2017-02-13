var http = require('http');
var app = require('./config/express.js')();

http.createServer(app).listen(process.env.PORT || 10001, function(){
    console.log("Express Server rodando na porta " + process.env.PORT || 10001);
});