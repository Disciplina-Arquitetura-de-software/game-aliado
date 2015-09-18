// app/models/peca.js

module.exports = function Peca(jogador, tabuleiro) {
  this.ID = null;
  this.tabuleiro = tabuleiro;
  this.jogador = jogador;
  this.posicao = [null, null];
};
