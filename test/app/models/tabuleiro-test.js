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

        var computado = JSON.stringify(new Tabuleiro({nome:'exemplo',estado:'novo',
                                                      jogador_da_vez:'0000',jogadores: {},
                                                      rodadas:0}));

        computado.should.be.equal(esperado);
        done();
    });

    it('verificar o estado do tabuleiro para iniciar com 4 jogadores', function(done) {
        var esperado = JSON.stringify({
            'nome': 'exemplo',
            'estado': 'jogando',
            'jogador_da_vez': '0000',
            'jogadores': ['0000','0018','1818','1800'],
            'rodadas': 1
        });

        var jogadores = ['0000','0018','1818','1800'];

        var computado = JSON.stringify(new Tabuleiro({nome:'exemplo',estado:'jogando',
                                                      jogador_da_vez:'0000',jogadores: jogadores,
                                                      rodadas:1}));

        computado.should.be.equal(esperado);
        done();
    });
});
