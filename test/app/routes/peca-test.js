const request = require('request');
const assert = require("should");

const url = 'http://localhost:3000/api/';
const peca = 'pecaNova';

describe('API / Peça : Teste das rotas', function() {

	it('Teste de resposta 200 para um nova peça', function(done) {
		var acao = '/criar';

		request(url + peca + acao,
		function(error, response, body) {
  	   (error==null).should.be.true;
       (response.statusCode).should.be.equal(200);
       done();
		});
	});

});
