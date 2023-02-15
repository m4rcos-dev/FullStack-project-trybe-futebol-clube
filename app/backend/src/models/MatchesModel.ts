import { resultMatches } from '../tests/mocks/matches';
import { IMatches, IMatchesModel } from '../interfaces/MatchesInterface';

export default class MatchesModel implements IMatchesModel {
  async getAll(): Promise<IMatches> {
    const result = resultMatches;
    return result;
  }
}
