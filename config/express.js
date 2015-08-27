var express = require('express');
var load = require('express-load');

module.exports = function() {
	var app = express();

	app.set('port', 3000);

	app.use(express.static('./public'));

	console.log('carregando arquivos models, controllers, routes');
	// load('models', {cwd: 'app'})
	// 	.then('controllers')
	// 	.then('routes')
	// 	.into(app);
	load('models', {cwd: 'app'}).into(app);
	load('controllers', {cwd: 'app'}).into(app);
	load('routes', {cwd: 'app'}).into(app);

	return app;
}
