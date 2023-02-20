import * as sinon from 'sinon';
import * as chai from 'chai';
//@ts-ignore
import chaiHttp = require('chai-http');


import { app } from '../app';
import Matches from '../database/models/Matches';
import { resultLeaderboardsBdHome, resultLeaderboardsBdAway } from './mocks/leaderboards';
import leaderboardHomeGenerate from '../utils/leaderboardHomeGenerate';


chai.use(chaiHttp);

const { expect } = chai;

describe('Testa enpoint /leaderboards/home', () => {
  // TRIPLE AA
  // ARRANGE
  beforeEach(async () => {
    sinon
      .stub(Matches, 'findAll')
      .resolves(resultLeaderboardsBdHome as unknown as Matches[])
    sinon
      .stub(Matches, 'findAll')
      .resolves(resultLeaderboardsBdAway as unknown as Matches[])
  });

  afterEach(async () => {
    (Matches.findAll as sinon.SinonStub).restore();
  });

  const resultSortedHome = leaderboardHomeGenerate(resultLeaderboardsBdHome);
  const resultSortedAway = leaderboardHomeGenerate(resultLeaderboardsBdAway);

  it('Retorna status 200 e um json contendo as leaderboards home', async () => {
    // ACT - agir / executar
    const httpResponse = await chai
      .request(app)
      .get('/leaderboard/home')
    // ASSERT - verificar
    expect(httpResponse.status).to.equal(200);
    expect(httpResponse.body).to.be.deep.equal(resultSortedHome);
  });

  describe('Testa enpoint /leaderboards/away', () => {
    it('Retorna status 200 e um json contendo as leaderboards away', async () => {
      // ACT - agir / executar
      const httpResponse = await chai
        .request(app)
        .get('/leaderboard/away')
      // ASSERT - verificar
      expect(httpResponse.status).to.equal(200);
      expect(httpResponse.body).to.be.deep.equal(resultSortedAway);
    });
  })
});
