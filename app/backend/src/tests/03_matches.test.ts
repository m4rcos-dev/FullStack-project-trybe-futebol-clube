import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');
import Matches from '../database/models/Matches'

import { app } from '../app';
import { bodyCreateMatche, resultCreateMatche, resultMatches } from './mocks/matches';

chai.use(chaiHttp);

const { expect } = chai;

describe('Testa endpoint /matches', () => {
  // TRIPLE AA
  // ARRANGE - arranjar / arrumar
  beforeEach(async () => {
    sinon
      .stub(Matches, 'findAll')
      .resolves(resultMatches as unknown as Matches[])
    sinon
      .stub(Matches, 'create')
      .resolves(resultCreateMatche as Matches)
  });

  afterEach(async () => {
    (Matches.findAll as sinon.SinonStub).restore();
    (Matches.create as sinon.SinonStub).restore();
  });

  it('Retorna status 200 e um json contendo todos matches', async () => {
    // ACT - agir / executar
    const httpResponse = await chai
      .request(app)
      .get('/matches')
    // ASSERT - verificar
    expect(httpResponse.status).to.equal(200);
    expect(httpResponse.body).to.be.deep.equal(resultMatches);
  });

  it('Retorna um status 201 e json contendo o matche cadastrado', async () => {
    // Requirement 22
    // ACT - agir / executar
    const httpResponse = await chai
      .request(app)
      .post('/matches')
      .send(bodyCreateMatche)
    // ASSERT - verificar
    expect(httpResponse.status).to.equal(201);
    expect(httpResponse.body).to.be.deep.equal(resultCreateMatche);
  })
})
