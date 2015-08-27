
module.exports = function(app) {
	console.log('Rota de tabuleiro');
	app.get('/api/:tabuleiro', function(req,res){res.send('api tabuleiro')})
	app.get('/api/:tabuleiro/novo', function(req,res){res.send('api tabuleiro novo')})
};
