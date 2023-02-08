import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');

import { app } from '../app';
import Teams from '../database/models/Teams';
import { resultTeam, resultTeams } from './mocks/teams';

chai.use(chaiHttp);

const { expect } = chai;

describe('Testa endpoint /teams', () => {
  //TRIPLE AA
  // ARRANGE - arranjar / arrumar
  beforeEach(async () => {
    sinon
      .stub(Teams, 'findAll')
      .resolves(resultTeams as unknown as Teams[])
    sinon
      .stub(Teams, 'findOne')
      .resolves(resultTeam as Teams)
  });

  afterEach(async () => {
    (Teams.findAll as sinon.SinonStub).restore();
    (Teams.findOne as sinon.SinonStub).restore();
  });

  it('Retorna status 200 e um json contendo todos teams', async () => {
    //ACT - agir / executar
    const httpResponse = await chai
      .request(app)
      .get('/teams')
    // ASSERT - verificar
    expect(httpResponse.status).to.equal(200);
    expect(httpResponse.body).to.be.deep.equal(resultTeams);
  });

  describe('Testa endpoint /temas/:id', () => {
    //TRIPLE AA
    // ARRANGE - arranjar / arrumar
    // beforeEach(async () => {
    //   sinon
    //     .stub(Teams, 'findOne')
    //     .resolves(resultTeam as Teams)
    // });

    // afterEach(async () => {
    //   (Teams.findOne as sinon.SinonStub).restore();
    // });

    const id = 1;
    const idNull = 100;

    it('Retorna status 200 e um json contendo apenas um team', async () => {
      //ACT - agir / executar
      const httpResponse = await chai
        .request(app)
        .get('/teams/:id')
      // ASSERT - verificar
      expect(httpResponse.status).to.equal(200);
      expect(httpResponse.body).to.be.deep.equal(resultTeam);
    });

    // it('Retorna um status 404 e uma menssagem de erro ao não encontrar um Team', async () => {
    //   const httpResponse = await chai
    //     .request(app)
    //     .get(`/teams/${idNull}`)
    //   expect(httpResponse.status).to.equal(404);
    //   expect(httpResponse.body).to.be.deep.equal({ message: 'team not found'})
    // })
  })
})
