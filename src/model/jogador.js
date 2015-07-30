// jogador.js

function Jogador(nome, email) {
  this.nome = nome;
  this.email = email;
  this.tabuleiro = null;
  this.pecas = [];
}

module.exports = Jogador;
