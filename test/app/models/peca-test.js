// test/app/models/peca-test.js

const Peca = require("../../../app/models/peca.js");
const assert = require("should");

describe('Peca : Teste de classe', function () {

    const jogador = null;
    const tabuleiro = null;

    it('Verificando a nova instancia diferente de null', function (done) {
        var computado = new Peca(jogador, tabuleiro);
        (computado != null).should.be.true;
        done();
    });

    it('Verificar se a nova instancia é do tipo Tabuleiro', function (done) {
        var computado = new Peca(jogador, tabuleiro);
        computado.should.be.an.instanceOf(Peca);
        done();
    });

    it('verificar a conversão de objetos para JSON', function(done) {
        var esperado = JSON.stringify({
            'ID': null,
            'tabuleiro': null,
            'jogador': null,
            'posicao': [null, null]
        });

        var computado = JSON.stringify(new Peca(jogador, tabuleiro));

        computado.should.be.equal(esperado);
        done();
    });
});
