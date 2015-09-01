// test/app/models/tabuleiro-test.js

const Tabuleiro = require("../../../app/models/tabuleiro.js");
const assert = require("should");

describe('Tabuleiro : Teste de classe', function () {

    it('Verificando a nova instancia diferente de null', function (done) {
        var computado = new Tabuleiro({nome:'exemplo'});
        (computado != null).should.be.true;
        done();
    });

    it('Verificar se a nova instancia é do tipo Tabuleiro', function (done) {
        var computado = new Tabuleiro({nome:'exemplo'});
        computado.should.be.an.instanceOf(Tabuleiro);
        done();
    });

    it('verificar a conversão de objetos para JSON', function(done) {
        var esperado = JSON.stringify({
            'nome': 'exemplo',
            'estado': 'novo',
            'jogador_da_vez': '0000',
            'jogadores': {},
            'rodadas': 0
        });

        var computado = JSON.stringify(new Tabuleiro({nome:'exemplo'}));

        computado.should.be.equal(esperado);
        done();
    });
});
