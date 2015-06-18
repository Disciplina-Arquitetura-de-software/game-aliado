// #!/usr/bin/env node --harmony
// 'use strict';

const express = require('express');
const app = express();
const tabuleiro_classe = require('./model/tabuleiro.js');
var tabuleiros = [];

// app.use(express.logger('dev'));

app.get('/', function (req, res) {
    res.send('API do jogo Aliado');
});

app.get('/api/:tabuleiro/', function(req, res) {
    for(index in tabuleiros){
      console.log(tabuleiros[index]);
        if(tabuleiros[index].nome == req.params.tabuleiro){
            res.status(200).json(tabuleiros[index]);
            return ;
        }
    }

    res.status(404).json({});
});

app.get('/api/:tabuleiro/novo', function(req, res) {
    var tabuleiro_novo = new tabuleiro_classe(req.params.tabuleiro);
    tabuleiros.push(tabuleiro_novo);

    res.status(200).send('OK');
});

var server = app.listen(3000, function () {
    const host = server.address().address
    const port = server.address().port;

    console.log('Jogo Aliado... listening at http://%s:%s', host, port);
});
