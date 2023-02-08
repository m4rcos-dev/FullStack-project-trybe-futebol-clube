import { ITeamsResult, ITeamsService } from '../interfaces/TeamsInterface';
import { resultTeams } from '../tests/mocks/teams';

export default class TeamsService implements ITeamsService {
  async getAll(): Promise<ITeamsResult> {
    const result = resultTeams;
    return { status: 200, result };
  }
}
