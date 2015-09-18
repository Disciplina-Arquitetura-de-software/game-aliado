const request = require('request');
const assert = require("should");

const url = 'http://localhost:3000';

describe('Teste do servidor', function() {
	describe('Teste de resposta 200 do servidor', function () {
		var path = '/';
		it('Deve retornar estado 200 na URL /', function (done) {
			request(url, function(error, response, body) {
				(error==null).should.be.true;
				(response.statusCode).should.be.equal(200);
				done();
			});
		});
	});
});
