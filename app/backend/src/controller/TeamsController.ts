import { Request, Response } from 'express';
import { resultTeam } from '../tests/mocks/teams';
import { ITeamsService } from '../interfaces/TeamsInterface';

export default class TeamsController {
  private _teamsService: ITeamsService;

  constructor(teamsService: ITeamsService) {
    this._teamsService = teamsService;
  }

  async getAll(_req: Request, res: Response): Promise<Response | void> {
    const { status, result } = await this._teamsService.getAll();
    return res.status(status).json(result);
  }

  async getTeam(req: Request, res: Response): Promise<Response | void> {
    return res.status(200).json(resultTeam);
  }
}
