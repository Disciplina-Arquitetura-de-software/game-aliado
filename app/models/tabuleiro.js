// app/models/tabuleiro.js

var tabuleiro_estado = require("./tabuleiro_estado.js");

module.exports = function Tabuleiro(atributos) {
	this.nome = atributos.nome;
	this.estado = tabuleiro_estado.NOVO;
	this.jogador_da_vez = "0000";
	this.jogadores = {};
	this.rodadas = 0;
};
