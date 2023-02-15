import { IMatchesResult, IMatchesService } from '../interfaces/MatchesInterface';
import { resultMatches } from '../tests/mocks/matches';

export default class MatchesService implements IMatchesService {
  async getAll(): Promise<IMatchesResult> {
    const result = resultMatches;
    return { status: 200, result };
  }
}
