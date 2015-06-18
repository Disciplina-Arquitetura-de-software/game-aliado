//tabuleiro.js

function Tabuleiro(nome) {
	this.nome = nome;
	this.estado = "novo";
	this.jogador_da_vez = "0000";
	this.jogadores = {};
	this.rodadas = 0;
}

module.exports = Tabuleiro;
