// app/models/jogador.js

function Jogador(atributos) {
  this.nome = atributos.nome || null;
  this.email = atributos.email || null;
  this.tabuleiro = null;
  this.pecas = [];
}

Jogador.prototype.gerar_pecas = function(atributos){
	this.pecas = [];
}

module.exports = Jogador;
