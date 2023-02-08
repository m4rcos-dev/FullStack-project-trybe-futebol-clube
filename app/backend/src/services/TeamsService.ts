import {
  ITeamResult,
  ITeamsModel,
  ITeamsResult,
  ITeamsService } from '../interfaces/TeamsInterface';
import { resultTeam } from '../tests/mocks/teams';

export default class TeamsService implements ITeamsService {
  private _teamsModel: ITeamsModel;

  constructor(teamsModel: ITeamsModel) {
    this._teamsModel = teamsModel;
  }

  async getAll(): Promise<ITeamsResult> {
    const result = await this._teamsModel.getAll();
    return { status: 200, result };
  }

  async getTeam(id: string): Promise<ITeamResult> {
    console.log(id);
    const result = resultTeam;
    return { status: 200, result };
  }
}
