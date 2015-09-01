module.exports = function() {
	var controller = {};
	var tabuleiros = [];

	controller.recuperar_tabuleiro = function(req, res) {

	// 	for(index in tabuleiros){
	//         if(tabuleiros[index].nome == req.params.tabuleiro){
	//             res.status(200).json(tabuleiros[index]);
	//             return ;
	//         }
	//     }

	    res.status(200).json({erro: "Tabuleiro inexistente"});
		// res.status(404).json({erro: "Tabuleiro inexistente"});
	};

	controller.criar_tabuleiro = function(req, res) {
	    res.status(200).send({'erro': 'Tabuleiro inexistente'});
	};

    return controller;
};
