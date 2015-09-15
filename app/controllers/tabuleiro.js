

module.exports = function(app) {
	var controller = {};
	var tabuleiros = [];
	var Tabuleiro = require('../models/tabuleiro.js');
	var Jogador = require('../models/jogador.js');
	// var Tabuleiro = app.models.tabuleiro;

	controller.recuperar_tabuleiro = function(req, res) {

		var resultados = tabuleiros.filter(function(objeto) {
			return objeto.nome == req.params.tabuleiro
		});

		if (resultados.length) {
			res.status(200).json(resultados[0]);
			return;
		}

		res.status(404).send({
			resultado: 'erro',
			erro: 'Tabuleiro inexistente'
		});
	};

	//TODO testar a nao criação de outro tabuleiro com mesmo nome
	controller.criar_tabuleiro = function(req, res) {
		var resultados = tabuleiros.filter(function(objeto) {
			return objeto.nome == req.params.tabuleiro
		});

		if(resultados.length == 0){
			var novo = new Tabuleiro({nome: req.params.tabuleiro});
			tabuleiros.push(novo);
		}

		res.status(200).send({
			resultado: 'ok'
		});
	};

	//TODO mover o push para dentro de tabuleiro...
	controller.adicionar_jogador = function(req, res) {
		var tabuleiro = tabuleiros.filter(function(objeto) {
			return objeto.nome == req.params.tabuleiro;
		});

		if(tabuleiro.length){
			var jogadores = tabuleiro[0].jogadores;
			var jogador = jogadores.filter(function(objeto) {
				return objeto.nome == req.params.jogador;
			});

			if(jogador.length == 0){
				var jogador = new Jogador({nome: req.params.jogador});
				jogador.tabuleiro = req.params.tabuleiro;
				tabuleiros[0].jogadores.push(jogador);

				res.status(200).send({
					resultado: 'ok'
				});
			}
		}

		res.status(200).send({
			resultado: 'jogador inscrito...'
		});	    
	};

	return controller;
};
