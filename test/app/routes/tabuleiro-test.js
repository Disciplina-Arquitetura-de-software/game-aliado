const request = require('request');
const assert = require("should");

const url = 'http://localhost:3000/api/';
const tabuleiro_nome = 'exemplo';

describe('API / Tabuleiro : Teste das rotas', function() {

	it('Teste de resposta 200 para o estado do tabuleiro', function(done) {
		var acao = '/';

		request(url + tabuleiro_nome + acao,
		  function(error, response, body){
			(error==null).should.be.true;
			(response.statusCode).should.be.equal(200);
			done();
		});
	});

	it('Teste de resposta 200 para um novo tabuleiro', function(done) {
		var acao = '/criar';

		request(url + tabuleiro_nome + acao,
		  function(error, response, body) {
			(error==null).should.be.true;
			(response.statusCode).should.be.equal(200);
			done();
		});
	});

	it('Teste de resposta 200 para iniciar jogo', function(done) {
		var acao = '/iniciar';

		request(url + tabuleiro_nome + acao,
		  function(error, response, body) {
			(error==null).should.be.true;
			(response.statusCode).should.be.equal(200);
			done();
		});
	});

});
