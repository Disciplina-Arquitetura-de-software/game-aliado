
module.exports = function(app) {
	var controller = app.controllers.jogador;

	app.get('/api/jogador/:nome',
		controller.estado);
	app.get('/api/jogador/:nome/moverficha/:dado1/:dado2',
		controller.moverficha);
	app.post('/api/jogador/autenticar',
		controller.autenticar);
};
