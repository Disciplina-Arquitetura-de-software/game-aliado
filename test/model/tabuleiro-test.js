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

  it('verificar a conversão de objetos para JSON', function(done) {
     var obj_esperado = {
         'nome': 'exemplo',
         'estado': 'novo',
         'jogador_da_vez': '0000',
         'jogadores': {},
         'rodadas': 0
       };
    var esperado = JSON.stringify(obj_esperado);

    var obj_computado = new Tabuleiro('exemplo');
    var computado = JSON.stringify(obj_computado);

    computado.should.be.an.instanceOf(String);
    esperado.should.be.an.instanceOf(String);
    computado.should.be.equal(esperado);
    done();
  });
});
