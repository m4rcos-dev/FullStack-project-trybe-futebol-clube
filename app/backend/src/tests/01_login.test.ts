import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');

import { app } from '../app';
import User from '../database/models/User';

import { Response } from 'superagent';
import tokenGenerate from '../utils/tokenGenerate';
import { bodyLogin, loginWhitoutEmail, resultFindOne } from './mocks/login';



chai.use(chaiHttp);

const { expect } = chai;

describe('Testando API Trybe Fuebol Clube', () => {
  describe('Testa endpoint /login', () => {
    // TRIPLE AAA
    // ARRANGE - arranjar / arrumar

    const token = tokenGenerate(resultFindOne);

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
      expect(httpResponse.status).to.equal(200);
      expect(httpResponse.body).to.have.all.keys(['token']);
      expect(httpResponse.body).to.be.deep.equal({token});
    });

    it('Retorna status 400 e menssagem de erro ao tentar fazer login sem informar o email', async () => {
      const httpResponse =  await chai
            .request(app)
            .post('/login')
            .send(loginWhitoutEmail)
      expect(httpResponse.status).to.equal(400);
      expect(httpResponse.body).to.be.deep.equal({ message: "All fields must be filled" })
    })
  });
});
