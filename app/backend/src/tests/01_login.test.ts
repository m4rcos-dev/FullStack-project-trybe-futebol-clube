import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');

import { app } from '../app';
import User from '../database/models/User';

import { Response } from 'superagent';

chai.use(chaiHttp);

const { expect } = chai;

describe('Testando API Trybe Fuebol Clube', () => {
  describe('Testa endpoint /login', () => {
      // TRIPLE AAA
      // ARRANGE - arranjar / arrumar
      const token = {
        token: 'eyJhbGciOiJIUzI1NiIsIn' // Aqui deve ser o token gerado pelo backend.
      }

      const resultFindOne = {
        id: 1,
        username: 'anyuser',
        role: 'anyrole',
        email: 'any@email.com'
      }

      const bodyLogin = {
        email: "any@anyemail.com",
        password: "anypassword"
      }

      beforeEach(async () => {
        sinon
          .stub(User, 'findOne')
          .resolves(resultFindOne as User)
      });

      afterEach(async () => {
        (User.findOne as sinon.SinonStub).restore();
      });

    it('Retorna um token ao se logar corretamente', async () => {
      // ACT - agir / executar
      const httpResponse = await chai
      .request(app)
      .post('/login')
      .send(bodyLogin)
      // ASSERT - verificar
      expect(httpResponse.status).to.be.equal(200);
      expect(httpResponse.body).to.have.all.keys(['token'])
    })
  });
  /**
   * Exemplo do uso de stubs com tipos
   */

  // let chaiHttpResponse: Response;

  // before(async () => {
  //   sinon
  //     .stub(Example, "findOne")
  //     .resolves({
  //       ...<Seu mock>
  //     } as Example);
  // });

  // after(()=>{
  //   (Example.findOne as sinon.SinonStub).restore();
  // })

  // it('...', async () => {
  //   chaiHttpResponse = await chai
  //      .request(app)
  //      ...

  //   expect(...)
  // });

  // it('Seu sub-teste', () => {
  //   expect(false).to.be.eq(true);
  // });
});
