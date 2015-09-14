const request = require('request');
const assert = require("should");

const url = 'http://localhost:3000/api/';
const peca = 'peca';

describe('API / Peça : Teste do controlador', function() {

	it('CRIAR Teste de peça não criada', function(done) {
		var acao = '/';

		var esperado = JSON.stringify({
			'resultado': 'erro',
			 'erro': 'Peça inexistente'
		});

		request(url + peca + acao,
		  function(error, response, body){
			(error==null).should.be.true;
			(response.statusCode).should.be.equal(404);
			body.should.be.equal(esperado);
			done();
		});
	});

	describe('CRIAR Teste de criar nova peça', function() {
		it('Testando o resultado da chamada', function(done) {
			var acao = '/criar';

			var esperado = JSON.stringify({
				 'resultado': 'ok',
			});

			request(url + peca + acao,
			  function(error, response, body){
				(error==null).should.be.true;
				(response.statusCode).should.be.equal(200);
				body.should.be.equal(esperado);
				done();
			});
		});

		it('Testando o peça JSON após a criação', function(done) {
			var acao = '/criar';

			var esperado = {
					ID: null,
					tabuleiro: null,
					jogador: null,
					posicao: [null, null]
			};

			request(url + peca + acao,
			  function(error, response, body){});

			request(url + peca + '/',
			  function(error, response, body){
				(error==null).should.be.true;
				(response.statusCode).should.be.equal(200);
				estado_computado = JSON.parse(body);
				estado_computado.should.have
					.properties(esperado);
				done();
			});
		});
	});

});
