var request = require('supertest')

describe('Teste de ambiente', function () {

  it('Deve retornar estado 200 na URL /', function (done) {

    request('http://localhost:3000')
      .get('/')
      .expect(200)
      .end(function(err, res){
        if (err) return done(err)
        done()
      })

  })
})