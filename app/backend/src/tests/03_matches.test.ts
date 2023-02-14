import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');
import Matches from '../database/models/Matches'

import { app } from '../app';
import { resultMatches } from './mocks/matches';

chai.use(chaiHttp);

const { expect } = chai;

describe('Testa endpoint /matches', () => {
  // TRIPLE AA
  // ARRANGE - arranjar / arrumar
  beforeEach(async () => {
    sinon
      .stub(Matches, 'findAll')
      .resolves(resultMatches as unknown as Matches[])
  });

  afterEach(async () => {
    (Matches.findAll as sinon.SinonStub).restore();
  });

  it('Retorna status 200 e um json contendo todos matches', async () => {
    const httpResponse = await chai
      .request(app)
      .get('/matches')
    expect(httpResponse.status).to.equal(200);
    expect(httpResponse.body).to.be.deep.equal(resultMatches);
  });
})
