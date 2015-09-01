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
		var novo = new Tabuleiro({nome: req.params.tabuleiro});
		tabuleiros.push(novo);

	    res.status(200).send({
			resultado: 'ok'
		});
	};

    return controller;
};
