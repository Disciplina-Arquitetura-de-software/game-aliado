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

	it('Teste de resposta 200 do jogo exemplo', function(done) {
		request(url)
		 	.get(path + 'exemplo/')
		 	.expect(200)
		 	.end(function(error, response) {
		 		if (error) return done(error)
		 		done()
		 	})
	})

	it('Teste de resposta do estado do jogo exemplo', function(done) {
		request(url)
		 	.get(path + 'exemplo/')
		 	.expect({
			    "tabuleiro" : {
			        "jogadores" : {
			            "0000" : {"Ficha1" : [0,0],"Ficha2" : [0,0],"Ficha3" : [0,0],"Ficha4" : [0,0]},
			            "0018" : {"Ficha1" : [0,18],"Ficha2" : [0,18],"Ficha3" : [0,18],"Ficha4" : [0,18]},
			            "1818" : {"Ficha1" : [18,18],"Ficha2" : [18,18],"Ficha3" : [0,0],"Ficha4" : [18,18]},
			            "1800" : {"Ficha1" : [18,0],"Ficha2" : [18,0],"Ficha3" : [18,0],"Ficha4" : [18,0]}
			        },
			        "nome" : "exemplo",
			        "rodadas": "1",
					"estado": "indefinido",
			        "jogador_da_vez": "0000"
			    }
			})
		 	.end(function(error, response) {
		 		if (error) return done(error)
		 		done()
		 	})
	})

	it('Teste de resposta do estado do jogo meu-exemplo', function(done) {
		request(url)
		 	.get(path + 'meu-exemplo/')
		 	.expect({
    			"tabuleiro" : {
        			"jogadores" : {
            			"0000" : {"Ficha1" : [0,0],"Ficha2" : [0,0],"Ficha3" : [0,0],"Ficha4" : [0,0]},
			            "0018" : {"Ficha1" : [0,18],"Ficha2" : [0,18],"Ficha3" : [0,18],"Ficha4" : [0,18]},
			            "1818" : {"Ficha1" : [18,18],"Ficha2" : [18,18],"Ficha3" : [0,0],"Ficha4" : [18,18]},
			            "1800" : {"Ficha1" : [18,0],"Ficha2" : [18,0],"Ficha3" : [18,0],"Ficha4" : [18,0]}
			        },
			        "nome" : "meu-exemplo",
			        "rodadas": "1",
					"estado": "indefinido",
			        "jogador_da_vez": "0000"
			    }
			})
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
