import { Request, Response } from 'express';
import { resultLeaderboards } from '../tests/mocks/leaderboards';

export default class LeaderboardController {
  async getAllHomeTeam(_req: Request, res: Response): Promise<Response | void > {
    return res.status(200).json(resultLeaderboards);
  }
}
