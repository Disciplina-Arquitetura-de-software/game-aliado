
module.exports = function(app) {
	var controller = app.controllers.peca;

	app.get('/api/peca',
		controller.recuperar_peca);
	app.get('/api/peca/criar',
		controller.criar_peca);
};
