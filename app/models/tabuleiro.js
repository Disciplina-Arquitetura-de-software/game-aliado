// app/models/tabuleiro.js

var tabuleiro_estado = require("./tabuleiro_estado.js");

module.exports = function Tabuleiro(atributos) {
	this.nome = atributos.nome;
	this.estado = atributos.estado;
	this.jogador_da_vez = atributos.jogador_da_vez;
	this.jogadores = atributos.jogadores;
	this.rodadas = atributos.rodadas;
};
