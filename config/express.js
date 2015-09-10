var express = require('express');
var load = require('express-load');
var cookieParser = require('cookie-parser');

module.exports = function() {
	var app = express();

	app.set('port', 3000);

	app.use(express.static('./public'));
	app.use(cookieParser());

	load('models', {cwd: 'app'})
		.then('controllers')
		.then('routes')
		.into(app);

	return app;
}
