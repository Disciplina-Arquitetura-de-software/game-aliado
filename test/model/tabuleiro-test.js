// tabuleiro-test.js
const tabuleiro_classe = require("../../src/model/tabuleiro.js");
const assert = require("assert");

describe('Teste de Classe Tabuleiro', function () {
	
  it('Criando uma nova instancia', function (done) {
  	var tabuleiro_novo = new tabuleiro();
    (tabuleiro_novo!= null).should.be.true;
  })
})