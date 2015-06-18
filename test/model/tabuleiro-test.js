// tabuleiro-test.js
const Tabuleiro = require("../../src/model/tabuleiro.js");
const assert = require("should");

describe('Teste de Classe Tabuleiro', function () {

  it('Verificando a nova instancia diferente de null', function (done) {
  	var tabuleiro_novo = new Tabuleiro('exemplo');
    (tabuleiro_novo!= null).should.be.true;
		done();
  });

	it('nova instancia é do tipo Tabuleiro', function (done) {
		var tabuleiro_novo = new Tabuleiro('exemplo');
		tabuleiro_novo.should.be.an.instanceOf(Tabuleiro);
		done();
	});
});
