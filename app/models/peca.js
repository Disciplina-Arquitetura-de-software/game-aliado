// app/models/peca.js

module.exports = function Peca(atributos) {
    this.ID = null;
    this.tabuleiro = atributos.tabuleiro;
    this.jogador = atributos.jogador;
    this.posicao = [null, null];
};
