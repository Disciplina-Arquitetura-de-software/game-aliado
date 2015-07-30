// tabuleiro.js
var tabuleiro_estado = require("./tabuleiro_estado.js")

function Tabuleiro(nome) {
	this.nome = nome;
	this.estado = tabuleiro_estado.NOVO;
	this.jogador_da_vez = "0000";
	this.jogadores = {};
	this.rodadas = 0;
}

module.exports = Tabuleiro;
