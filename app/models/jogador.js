// app/models/jogador.js

module.exports = function Jogador(atributos) {
  this.nome = atributos.nome || null;
  this.email = atributos.email || null;
  this.tabuleiro = null;
};
