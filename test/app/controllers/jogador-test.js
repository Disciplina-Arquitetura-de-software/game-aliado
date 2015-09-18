const request = require('request');
const assert = require("should");

const url = 'http://localhost:3000/api/';
const tabuleiro_nome = 'exemplo';

describe('API Controlador Jogador: Teste das rotas', function() {

    it('Jogador jogar dados', function(done) {
        var acao = 'Minora/jogar';

        request(url + acao,
            function(error, response, body) {
                var estado_computado = JSON.parse(body);
                (estado_computado.dados).should.not.be.empty();
                (estado_computado.dados[0]).should.be.within(1,6);
                (estado_computado.dados[1]).should.be.within(1,6);
                done();
            });
        });
    });
