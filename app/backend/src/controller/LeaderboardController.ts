import { Request, Response } from 'express';
import { ILeaderboardService } from '../interfaces/LeaderboardInterface';

export default class LeaderboardController {
  private _leaderboardService: ILeaderboardService;

  constructor(leaderboardService: ILeaderboardService) {
    this._leaderboardService = leaderboardService;
  }

  async getAllHomeTeams(_req: Request, res: Response): Promise<Response | void > {
    const { status, result } = await this._leaderboardService.getAllHomeTeams();
    return res.status(status).json(result);
  }
}
