var Dado = require('../../../app/models/dado');

var should = require('should');

describe('MODELS Dado : Teste de classe', function () {
    it('Verificando a nova instancia diferente de null', function (done) {
        var objeto = new Dado();
        (objeto != null).should.be.true;
        done();
    });

    it('Verificar a nova instancia é do tipo Dado', function (done) {
        var objeto = new Dado();
        objeto.should.be.an.instanceOf(Dado);
        done();
    });

    it('Verificar se o dado gera 2 valores aleatórios', function (done) {
        var objeto = new Dado();
        var resultado = objeto.jogar();

        resultado.should.be.an.instanceOf(Number);
        resultado.should.be.within(1, 6);
        done();
    });

});
