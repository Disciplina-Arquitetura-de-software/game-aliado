
module.exports = function(app) {
	var controller = app.controllers.tabuleiro;

	app.get('/api/:tabuleiro',
		controller.recuperar_tabuleiro);
	app.get('/api/:tabuleiro/criar',
		controller.criar_tabuleiro);
};
