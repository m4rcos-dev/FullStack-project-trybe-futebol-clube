import * as sinon from 'sinon';
import * as chai from 'chai';
//@ts-ignore
import chaiHttp = require('chai-http');


import { app } from '../app';
import Matches from '../database/models/Matches';
import leaderboardGenerate from '../utils/leaderboardGenerate';
import { resultLeaderboarsBd } from './mocks/leaderboards';


chai.use(chaiHttp);

const { expect } = chai;

describe('Testa enpoint /leaderboard', () => {
  // TRIPLE AA
  // ARRANGE
  beforeEach(async () => {
    sinon
      .stub(Matches, 'findAll')
      .resolves(resultLeaderboarsBd as unknown as Matches[])
  });

  afterEach(async () => {
    (Matches.findAll as sinon.SinonStub).restore();
  });

  const resultSortedLeaderbord = leaderboardGenerate(resultLeaderboarsBd);

  it('Retorna status 200 e um json contendo as leaderboards away', async () => {
    // ACT - agir / executar
    const httpResponse = await chai
      .request(app)
      .get('/leaderboard')
    // ASSERT - verificar
    expect(httpResponse.status).to.equal(200);
    expect(httpResponse.body).to.be.deep.equal(resultSortedLeaderbord);
  });
});
