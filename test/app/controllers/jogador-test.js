const request = require('request');
const assert = require("should");

const url = 'http://localhost:3000/api/jogador';
const tabuleiro_nome = 'exemplo';

describe('API / Jogador : Teste do controlador', function() {

  it('- não autenticado', function(done) {
    var acao = '/fulano';
    var request_options = {
      url: url + acao,
      headers: {
        'User-Agent': 'NodeJS'
      }
    };

    var esperado = JSON.stringify({
      'resultado': 'erro',
      'erro': 'Jogador não atutenticado'
    });

    request(request_options,
      function(error, response, body){
        (error==null).should.be.true;
        (response.statusCode).should.be.equal(200);
        body.should.be.equal(esperado);
        done();
      });
    });

    it('- autenticacao OK', function(done) {
      var acao = '/autenticar';
      var request_options = {
        url: url + acao,
        form: {
            usario: "fulano",
            senha: "123456"
        },
        headers: {
          'User-Agent': 'NodeJS'
        }
      };

      var esperado = JSON.stringify({
        'resultado': 'autenticado'
      });

      request
      request.post(request_options,
        function(error, response, body){
          (error==null).should.be.true;
          (response.statusCode).should.be.equal(200);
          body.should.be.equal(esperado);
          done();
        });
      });

  });
