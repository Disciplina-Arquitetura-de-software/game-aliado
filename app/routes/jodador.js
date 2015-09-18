module.exports = function(app) {
	app.get('/api/:jogador/jogar',
		app.controllers.jogador.jogar_dados_brincando
	);
};
