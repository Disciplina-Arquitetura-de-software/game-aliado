var express = require('express');
var load = require('express-load');

module.exports = function() {
  	var app = express();

  	app.set('port', 3000);

  	app.use(express.static('./public'));

  	load('models', {cwd: 'app'})
 		.then('controllers')
 		.then('routes')
 		.into(app);
        console.log('--- config/express');
        console.log(app._router.stack);

	return app;
};
