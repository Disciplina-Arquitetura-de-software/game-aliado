var http = require('http');
var app = require('./config/express')();

http.createServer(app).listen(app.get('port'), function(){
    console.log('API do jogo Aliado funcionando na porta ' + app.get('port'));
    console.log(app._router.stack);
});
