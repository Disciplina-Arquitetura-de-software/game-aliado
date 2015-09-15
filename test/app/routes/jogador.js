const request = require('request')
const assert = require("should")

const url = 'http://localhost:3000/api/jogador'
const jogador = '/jogador_test'

describe('API / Jogador : Teste das rotas', function() {

	it('Teste reposta 200 para Mover ficha', function(done){
		var acao = '/moverficha';
		var dados1 = '/1';
		var dados2 = '/2';

		request(url + jogador + acao + dados1 + dados2,
		  function(error, response, body){
			(error==null).should.be.true;
			(response.statusCode).should.be.equal(200);
			done();
		});
	})
})

