module.exports = function(app) {
	var controller = {};
	var pecas = [];
	var Peca = require('../models/peca.js');

	controller.recuperar_peca = function(req, res) {

		var resultados = pecas.filter(function(objeto) {
			return objeto.tabuleiro == req.params.peca && objeto.jogador == req.params.peca
		});
		if (resultados.length) {
			res.status(200).json(resultados[0]);
			return;
		}
		// for(index in pecas){
	    //     if(pecas[index].peca == req.params.peca){
	    //         res.status(200).json(pecas[index]);
	    //         return ;
	    //     }
	    // }

		res.status(404).send({
			resultado: 'erro',
			erro: 'Peça inexistente'
		});
	};

	controller.criar_peca = function(req, res) {
		var nova = new Peca({tabuleiro: req.params.peca, jogador: req.params.peca});
		pecas.push(nova);

	    res.status(200).send({
			resultado: 'ok'
		});
	};

    return controller;
};
