import { resultTeam } from '../../tests/mocks/teams';
import Teams from '../../database/models/Teams';
import { ITeam, ITeams, ITeamsRepository } from '../../interfaces/TeamsInterface';

export default class TeamsSequelizeRepository implements ITeamsRepository {
  constructor(private teamsModel = Teams) {}

  async getAll(): Promise<ITeams> {
    const result = await this.teamsModel.findAll();
    return result;
  }

  async getTeam(id: string): Promise<ITeam> {
    console.log(id);
    const result = resultTeam;
    return result;
  }
}
