const request = require('request');
const assert = require("should");

const url = 'http://localhost:3000';

describe('Teste do estado de um tabuleiro', function() {

		var path = '/api/';
		var tabuleiro_nome = 'exemplo';

		it('Teste de resposta 404 do jogo exemplo não criado', function(done) {
			request(url + path + tabuleiro_nome + '/',
			  function(error, response, body){
				(error==null).should.be.true;
				(response.statusCode).should.be.equal(404);
				done();
			});
		});

		it('Teste de resposta 200 do estado do jogo ao criar um novo jogo', function(done) {
			var acao = '/novo';
			request(url + path + tabuleiro_nome + acao,
			  function(error, response, body) {
				(error==null).should.be.true;
				(response.statusCode).should.be.equal(200);
				done();
			});
		});

		it('Teste de resposta do estado do jogo ao criar um novo jogo JSON', function(done) {
			var acao = '/';
			var estado_esperado = JSON.stringify({
		         'nome': 'exemplo',
		         'estado': 'novo',
		         'jogador_da_vez': '0000',
		         'jogadores': {},
		         'rodadas': 0
			});

			request(url + path + tabuleiro_nome + acao,
			  function(error, response, body){
				(error==null).should.be.true;
				(response.statusCode).should.be.equal(200);
				body.should.be.equal(estado_esperado);
				done();
			});
		});

		// ERRADO
		it('Teste de resposta do estado do jogo finalizado', function(done) {
			var acao = '/finalizar';
			var estado_esperado = {
	         	'nome': 'exemplo',
	         	'estado': 'finalizado',
			};

			request(url + path + tabuleiro_nome + acao,
			  function(error, response_head, response_body){
				(error==null).should.be.true;
				(response_head.statusCode).should.be.equal(200);
				estado_computado = JSON.parse(response_body);
				(estado_computado).should.have.property('nome', estado_esperado.nome);
				(estado_computado).should.have.property('estado', estado_esperado.estado);
				// (estado_computado).should.have.properties(estado_esperado);
				// mais detalhado para ter mensagens de erro em separado
			});

			request(url + path + tabuleiro_nome + acao,
			  function(error, response_head, response_body){
				(error==null).should.be.true;
				(response_head.statusCode).should.be.equal(404);
			});

			done();
		});
});
