import { resultTeams } from '../tests/mocks/teams';
import { ITeams, ITeamsModel } from '../interfaces/TeamsInterface';

export default class TeamsModel implements ITeamsModel {
  async getAll(): Promise<ITeams> {
    const result = resultTeams;
    return result;
  }
}
