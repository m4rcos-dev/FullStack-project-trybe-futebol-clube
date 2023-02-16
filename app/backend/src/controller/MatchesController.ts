import { Request, Response } from 'express';
import { IMatchesService } from '../interfaces/MatchesInterface';

export default class MatchesController {
  private _matchesService: IMatchesService;

  constructor(matchesService: IMatchesService) {
    this._matchesService = matchesService;
  }

  async getAll(req: Request, res: Response): Promise<Response | void> {
    const { inProgress } = req.query;
    const { status, result } = await this._matchesService.getAll(inProgress);
    return res.status(status).json(result);
  }

  async create(req: Request, res: Response): Promise<Response | void> {
    const { body } = req;
    const { status, result, message } = await this._matchesService.create(body);
    if (message) return res.status(status).json({ message });
    return res.status(status).json(result);
  }

  async update(req: Request, res: Response): Promise<Response | void> {
    const { id } = req.params;
    const { status, message } = await this._matchesService.update(id);
    return res.status(status).json({ message });
  }

  async updateById(req: Request, res: Response): Promise<Response | void> {
    return res.status(200).json({ message: 'Updated' });
  }
}
