var request = require('supertest')
const url = 'http://localhost:3000';

describe('Teste de ambiente', function () {
	var path = '/';
  it('Deve retornar estado 200 na URL /', function (done) {
    request(url)
      .get(path)
      .expect(200)
      .end(function(err, res){
        if (err) return done(err)
        done()
      })
  })
})

describe('Testando o estado de um jogo', function() {
	var path = '/api/';

	it('Teste de resposta 404 do jogo exemplo nao criado', function(done) {
		request(url)
		 	.get(path + 'exemplo/')
		 	.expect(404)
		 	.end(function(error, response) {
		 		if (error) return done(error)
		 		done()
		 	})
	})

	it('Teste de resposta 200 do estado do jogo ao criar um novo jogo', function(done) {
		var nome = 'exemplo';
		var acao_novo = '/novo';
		var acao_estado = '/';

		request(url)
			.get(path + nome + acao_novo)
			.expect(200)
			.end(function(error, response) {
				if (error) return done(error)
				done()
			});

	})

	it('Teste de resposta do estado do jogo ao criar um novo jogo', function(done) {
		var nome = 'exemplo';
		var acao_novo = '/novo';
		var acao_estado = '/';


		request(url)
			.get(path + acao_estado)
			.expect({
				"tabuleiro" : {
					"jogadores" : {},
					"nome" : "exemplo",
					"rodadas": "1",
					"estado": "novo",
					"jogador_da_vez": "0000"
				}
			})
			.end(function(error, response) {
				if (error) return done(error)
				done()
			})
	})
})