import Teams from '../../database/models/Teams';
import { ITeams, ITeamsRepository } from '../../interfaces/TeamsInterface';

export default class TeamsSequelizeRepository implements ITeamsRepository {
  constructor(private teamsModel = Teams) {}

  async getAll(): Promise<ITeams> {
    const result = await this.teamsModel.findAll();
    return result;
  }
}
