import { ITeamsModel, ITeamsResult, ITeamsService } from '../interfaces/TeamsInterface';

export default class TeamsService implements ITeamsService {
  private _teamsModel: ITeamsModel;

  constructor(teamsModel: ITeamsModel) {
    this._teamsModel = teamsModel;
  }

  async getAll(): Promise<ITeamsResult> {
    const result = await this._teamsModel.getAll();
    return { status: 200, result };
  }
}
