import { Request, Response } from 'express';
import { resultMatches } from '../tests/mocks/matches';

export default class MatchesController {
  async getAll(_req: Request, res: Response): Promise<Response | void> {
    return res.status(200).json(resultMatches);
  }
}
