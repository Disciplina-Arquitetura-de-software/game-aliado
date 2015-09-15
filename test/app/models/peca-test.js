// test/app/models/peca-test.js

const Peca = require("../../../app/models/peca.js");
const assert = require("should");

describe('Peca : Teste de classe', function () {

    const obj_jogador = null;
    const obj_tabuleiro = null;

    it('Verificando a nova instancia diferente de null', function (done) {
        var computado = new Peca(
            {jogador: obj_jogador, tabuleiro: obj_tabuleiro});
        (computado != null).should.be.true;
        done();
    });

    it('Verificar se a nova instancia é do tipo Peça', function (done) {
        var computado = new Peca(
            {jogador: obj_jogador, tabuleiro: obj_tabuleiro});
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

        var computado = JSON.stringify(new Peca(
            {jogador: obj_jogador, tabuleiro: obj_tabuleiro}));

        computado.should.be.equal(esperado);
        done();
    });
});
