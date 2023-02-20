import * as sinon from 'sinon';
import * as chai from 'chai';
//@ts-ignore
import chaiHttp = require('chai-http');


import { app } from '../app';
import Matches from '../database/models/Matches';
import { resultLeaderboardsBdAway } from './mocks/leaderboards';
import leaderboardAwayGenerate from '../utils/leaderboardAwayGenerate';


chai.use(chaiHttp);

const { expect } = chai;

describe('Testa enpoint /leaderboards/away', () => {
  // TRIPLE AA
  // ARRANGE
  beforeEach(async () => {
    sinon
      .stub(Matches, 'findAll')
      .resolves(resultLeaderboardsBdAway as unknown as Matches[])
  });

  afterEach(async () => {
    (Matches.findAll as sinon.SinonStub).restore();
  });

  const resultSortedAway = leaderboardAwayGenerate(resultLeaderboardsBdAway);

  it('Retorna status 200 e um json contendo as leaderboards away', async () => {
    // ACT - agir / executar
    const httpResponse = await chai
      .request(app)
      .get('/leaderboard/away')
    // ASSERT - verificar
    expect(httpResponse.status).to.equal(200);
    expect(httpResponse.body).to.be.deep.equal(resultSortedAway);
  });
});
// Requeriments 31 and 32
