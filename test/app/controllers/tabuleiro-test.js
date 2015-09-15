const request = require('request');
const assert = require("should");

const url = 'http://localhost:3000/api/';
const tabuleiro_nome = 'exemplo';

describe('API / Tabuleiro : Teste do controlador', function() {

	it('CRIAR Teste de tabuleiro não criado', function(done) {
		var acao = '/';

		var esperado = JSON.stringify({
			'resultado': 'erro',
			 'erro': 'Tabuleiro inexistente'
		});

		request(url + tabuleiro_nome + acao,
		  function(error, response, body){
			(error==null).should.be.true;
			(response.statusCode).should.be.equal(404);
			body.should.be.equal(esperado);
			done();
		});
	});

	describe('CRIAR Teste de criar novo tabuleiro', function() {
		it('\n\tTestando o resultado da chamada', function(done) {
			var acao = '/criar';

			var esperado = JSON.stringify({
				 'resultado': 'ok',
			});

			request(url + tabuleiro_nome + acao,
			  function(error, response, body){
				(error==null).should.be.true;
				(response.statusCode).should.be.equal(200);
				body.should.be.equal(esperado);
				done();
			});
		});

		it('\n\tTestando o tabuleiro JSON após a criação', function(done) {
			var acao = '/criar';

			var esperado = {
					nome: 'exemplo',
					estado: 'novo',
					jogador_da_vez: '0000',
					jogadores: [],
					rodadas: 0
			};

			request(url + tabuleiro_nome + acao,
		  		function(error, response, body){});

			request(url + tabuleiro_nome + '/',
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
	
	it('\n\tTeste de adicionar jogador em um tabuleiro', function(done) {
		var acao = '/adicionar';
		var jogador = "/jogador_teste";

		var esperado = JSON.stringify({
			'resultado': 'ok',
		});

		request(url + tabuleiro_nome + '/criar',
		  	function(error, response, body){});

			request(url + tabuleiro_nome + acao + jogador,
			  function(error, response, body){
				(error==null).should.be.true;
				(response.statusCode).should.be.equal(200);
				body.should.be.equal(esperado);
				done();
			});
	});	

	it('\n\tTeste do JSON de um jogador adicionado em um tabuleiro', function(done) {
		var acao = '/adicionar';
		var jogador = "/jogador_teste";
		
		var esperado = {
					nome: 'exemplo',
					estado: 'novo',
					jogador_da_vez: '0000',
					jogadores: [
					   {
							'nome': "jogador_teste",
							'email': null,
							'tabuleiro': 'exemplo',
							'pecas': []
						}
					],
					rodadas: 0
			};

			request(url + tabuleiro_nome + '/criar',
		  		function(error, response, body){});

			request(url + tabuleiro_nome + acao + jogador,
			  function(error, response, body){
			});

			request(url + tabuleiro_nome + '/',
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
