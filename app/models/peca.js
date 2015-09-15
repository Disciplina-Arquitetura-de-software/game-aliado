// app/models/peca.js

module.exports = function Peca(atributos) {
    this.ID = atributos.id;
    //this.tabuleiro = atributos.tabuleiro;
    this.jogador = atributos.jogador;
    this.posicao = [null, null];
};
