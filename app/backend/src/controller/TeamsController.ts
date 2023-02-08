import { Request, Response } from 'express';
import { ITeamsService } from '../interfaces/TeamsInterface';

export default class TeamsController {
  private _teamsService: ITeamsService;

  constructor(teamsService: ITeamsService) {
    this._teamsService = teamsService;
  }

  async getAll(req: Request, res: Response): Promise<Response | void> {
    const { status, result } = await this._teamsService.getAll();
    return res.status(status).json(result);
  }
}
