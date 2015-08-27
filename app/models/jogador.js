// app/models/jogador.js

module.exports = function Jogador(nome, email) {
  this.nome = nome;
  this.email = email;
  this.tabuleiro = null;
};
