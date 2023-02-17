import * as sinon from 'sinon';
import * as chai from 'chai';
//@ts-ignore
import chaiHttp = require('chai-http');


import { app } from '../app';
import Matches from '../database/models/Matches';
import { resultLeaderboards } from './mocks/leaderboards';
import { resultMatches } from './mocks/matches';


chai.use(chaiHttp);

const { expect } = chai;

describe('Testa enpoint /leaderboards/home', () => {
  // TRIPLE AA
  // ARRANGE

  beforeEach(async () => {
    sinon
      .stub(Matches, 'findAll')
      .resolves(resultMatches as unknown as Matches[])
  });

  afterEach(async () => {
    (Matches.findAll as sinon.SinonStub).restore();
  });

  it('Retorna status 200 e um json contendo as leaderboards', async () => {
    const httpResponse = await chai
      .request(app)
      .get('/leaderboards/home')
    expect(httpResponse.status).to.equal(200);
    expect(httpResponse.status).to.be.deep.equal(resultLeaderboards);
  });
});
