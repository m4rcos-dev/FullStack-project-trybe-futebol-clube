import { Request, Response } from 'express';
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
    const { id } = req.params;
    const { status, result, message } = await this._teamsService.getTeam(id);
    if (message) return res.status(status).json({ message });
    return res.status(status).json(result);
  }
}
