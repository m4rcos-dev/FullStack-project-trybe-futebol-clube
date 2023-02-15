import { Request, Response } from 'express';
import { IMatchesService } from '../interfaces/MatchesInterface';

export default class MatchesController {
  private _matchesService: IMatchesService;

  constructor(matchesService: IMatchesService) {
    this._matchesService = matchesService;
  }

  async getAll(_req: Request, res: Response): Promise<Response | void> {
    const { status, result } = await this._matchesService.getAll();
    return res.status(status).json(result);
  }
}
