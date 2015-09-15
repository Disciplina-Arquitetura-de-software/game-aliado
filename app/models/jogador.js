// app/models/jogador.js
var Peca = require("./peca.js");

function Jogador(atributos) {
  this.nome = atributos.nome || null;
  this.email = atributos.email || null;
  this.tabuleiro = null;
  this.pecas = [];
}

Jogador.prototype.gerar_pecas = function(atributos){
	for (var i = 0; i < 4; i++) {
		this.pecas.push(new Peca({
			id: i,
			jogador: this.nome
		}));
	};	
}

module.exports = Jogador;
