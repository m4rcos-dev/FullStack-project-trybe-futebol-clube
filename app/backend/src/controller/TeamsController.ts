import { Request, Response } from 'express';
import { resultFindAll } from '../tests/mocks/teams';

export default class TeamsController {
  async getAll(req: Request, res: Response): Promise<Response | void> {
    return res.status(200).json(resultFindAll);
  }
}
