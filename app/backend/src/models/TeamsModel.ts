import { ITeams, ITeamsModel, ITeamsRepository } from '../interfaces/TeamsInterface';

export default class TeamsModel implements ITeamsModel {
  private _teamsRepository: ITeamsRepository;

  constructor(teamsRepository: ITeamsRepository) {
    this._teamsRepository = teamsRepository;
  }

  async getAll(): Promise<ITeams> {
    const result = await this._teamsRepository.getAll();
    return result;
  }
}