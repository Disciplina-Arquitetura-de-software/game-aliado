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
    // res.status(200).json({
         // "tabuleiro" : {
            // "jogadores" : {
                // "0000" : {"Ficha1" : [0,0],"Ficha2" : [0,0],"Ficha3" : [0,0],"Ficha4" : [0,0]},
                // "0018" : {"Ficha1" : [0,18],"Ficha2" : [0,18],"Ficha3" : [0,18],"Ficha4" : [0,18]},
                // "1818" : {"Ficha1" : [18,18],"Ficha2" : [18,18],"Ficha3" : [0,0],"Ficha4" : [18,18]},
                // "1800" : {"Ficha1" : [18,0],"Ficha2" : [18,0],"Ficha3" : [18,0],"Ficha4" : [18,0]}
            // },
            // "nome" : req.params.tabuleiro,
            // "rodadas": "1",
            // "estado": "indefinido",
            // "jogador_da_vez": "0000"
        // }
    // });
     
    for(tab in tabuleiros){
        if(tab.nome == req.params.tabuleiro){
            res.status(200).json(tab);
            return ;
        }
    }

    res.status(404).send("");
});

app.get('/api/:tabuleiro/novo', function(req, res) {
    
    var tabuleiro_novo = new tabnuleiro();
    tabuleiros.push(tabuleiro_novo);

    res.status(200).send('OK');
});

var server = app.listen(3000, function () {
    const host = server.address().address
    const port = server.address().port;

    console.log('Jogo Aliado... listening at http://%s:%s', host, port);
});
