// test/app/models/jogador-test.js

const Jogador = require("../../../app/models/jogador.js");
const assert = require("should");

describe('Jogador : Teste de classe', function () {

    it('Verificando a nova instancia diferente de null', function (done) {
        var computado = new Jogador('exemplo','exemplo@gmail.com');
        (computado != null).should.be.true;
        done();
    });

    it('Verificar a nova instancia é do tipo Jogador', function (done) {
        var computado = new Jogador('exemplo','exemplo@gmail.com');
        computado.should.be.an.instanceOf(Jogador);
        done();
    });

    it('Verificar a conversão de objetos para JSON', function(done) {
        var esperado = JSON.stringify({
            'nome': 'exemplo',
            'email': 'exemplo@gmail.com',
            'tabuleiro': null
        });

        var computado = JSON.stringify(new Jogador('exemplo','exemplo@gmail.com'));

        computado.should.be.equal(esperado);
        done();
    });
});
