
module.exports = function(app) {
	var controller = app.controllers.jogador;

	app.get('/api/jogador/:nome',
		controller.estado);
	app.post('/api/jogador/autenticar',
		controller.autenticar);
};
