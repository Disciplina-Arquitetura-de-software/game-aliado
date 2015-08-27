module.exports = function() {
	var controller = {};
	var tabuleiros = [];
	var tabuleiro_classe = app.models.tabuleiro;

	controller.recuperar_tabuleiro = function(req, res) {

		for(index in tabuleiros){
	        if(tabuleiros[index].nome == req.params.tabuleiro){
	            res.status(200).json(tabuleiros[index]);
	            return ;
	        }
	    }

	    res.status(404).json({});
	};

	controller.criar_tabuleiro = function(req, res) {
		console.log('criar_tabuleiro 1');
	    var tabuleiro_novo = new tabuleiro_classe(req.params.tabuleiro);
		console.log('criar_tabuleiro 2');
	    tabuleiros.push(tabuleiro_novo);
		console.log('criar_tabuleiro 3');

	    res.status(200).send('OK');
	};

    return controller;
};
