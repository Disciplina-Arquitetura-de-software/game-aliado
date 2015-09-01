const request = require('request');
const assert = require("should");

const url = 'http://localhost:3000/api/';
const tabuleiro_nome = 'exemplo';

describe('API / Tabuleiro : Teste do controlador', function() {

	it('CRIAR Teste de tabuleiro não criado', function(done) {
		var acao = '/';

		var esperado = JSON.stringify({
			 'erro': 'Tabuleiro inexistente',
		});

		request(url + tabuleiro_nome + acao,
		  function(error, response, body){
			(error==null).should.be.true;
			(response.statusCode).should.be.equal(200);
			body.should.be.equal(esperado);
			done();
		});
	});

});
