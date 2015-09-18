const request = require('request');
const assert = require("should");

const tabuleiro_nome = 'exemplo';
const url = 'http://localhost:3000/api/';

describe('API Rota Jogador: Teste das rotas', function() {

	it('Jogador jogar dados', function(done) {
        var acao = 'Minora/jogar';

		request(url + acao,
		  function(error, response, body){
			(error==null).should.be.true;
			(response.statusCode).should.be.equal(200);
			done();
		});
    });
});
