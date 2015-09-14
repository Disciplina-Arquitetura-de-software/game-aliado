

module.exports = function(app) {
	var controller = {};
	var tabuleiros = [];
	var Tabuleiro = require('../models/tabuleiro.js');
	// var Tabuleiro = app.models.tabuleiro;

	controller.recuperar_tabuleiro = function(req, res) {

		var resultados = tabuleiros.filter(function(objeto) {
			return objeto.nome == req.params.tabuleiro
		});
		if (resultados.length) {
			res.status(200).json(resultados[0]);
			return;
		}
		// for(index in tabuleiros){
	    //     if(tabuleiros[index].nome == req.params.tabuleiro){
	    //         res.status(200).json(tabuleiros[index]);
	    //         return ;
	    //     }
	    // }

		res.status(404).send({
			resultado: 'erro',
			erro: 'Tabuleiro inexistente'
		});
	};

	controller.criar_tabuleiro = function(req, res) {
		var novo = new Tabuleiro({nome: req.params.tabuleiro,estado:'novo',
															jogador_da_vez:'0000',jogadores: {},rodadas:0});
		tabuleiros.push(novo);

	    res.status(200).send({
			resultado: 'ok'
		});
	};

	controller.iniciar_jogo = function(req, res) {
			var jogadores = ['0000','0018','1818','1800'];

			var novo = new Tabuleiro({nome: req.params.tabuleiro,estado:'jogando',
														jogador_da_vez:'0000',jogadores: jogadores, rodadas:1});
														
			tabuleiros.push(novo);

			res.status(200).json(novo);

			return

			res.status(404).send({
				resultado: 'erro',
				erro: 'Tabuleiro inexistente'
			});
	};

    return controller;
};
