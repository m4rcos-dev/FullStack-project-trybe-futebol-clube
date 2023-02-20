import * as sinon from 'sinon';
import * as chai from 'chai';
//@ts-ignore
import chaiHttp = require('chai-http');


import { app } from '../app';
import Matches from '../database/models/Matches';
import { resultLeaderboardsBd } from './mocks/leaderboards';
import leaderboardHomeGenerate from '../utils/leaderboardHomeGenerate';


chai.use(chaiHttp);

const { expect } = chai;

describe('Testa enpoint /leaderboards/home', () => {
  // TRIPLE AA
  // ARRANGE
  beforeEach(async () => {
    sinon
      .stub(Matches, 'findAll')
      .resolves(resultLeaderboardsBd as unknown as Matches[])
  });

  afterEach(async () => {
    (Matches.findAll as sinon.SinonStub).restore();
  });

  const resultSortedLeaderboard = leaderboardHomeGenerate(resultLeaderboardsBd)

  it('Retorna status 200 e um json contendo as leaderboards', async () => {
    const httpResponse = await chai
      .request(app)
      .get('/leaderboard/home')
    expect(httpResponse.status).to.equal(200);
    expect(httpResponse.body).to.be.deep.equal(resultSortedLeaderboard);
  });
});
