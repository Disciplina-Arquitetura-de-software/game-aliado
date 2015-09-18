var Dado = require('../models/dado');

module.exports = function() {
	var controller = {
        this.dado1= new Dado();
        this.dado2 = new Dado();
    };

    controller.jogar_dados_brincando = function(req,res) {
        res.status(200).json({
            dados: [
                this.dado1.jogar(),
                this.dado2.jogar()
            ]
        });
    };

    return controller;
};
