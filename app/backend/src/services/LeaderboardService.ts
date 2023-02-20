import leaderboardHomeGenerate from '../utils/leaderboardHomeGenerate';
import { ILeaderboardModel,
  ILeaderboardService,
  ILeaderboardServiceResult } from '../interfaces/LeaderboardInterface';

export default class LeaderboardService implements ILeaderboardService {
  private _leaderboardModel: ILeaderboardModel;

  constructor(leaderboardModel: ILeaderboardModel) {
    this._leaderboardModel = leaderboardModel;
  }

  async getAllHomeTeams(): Promise<ILeaderboardServiceResult> {
    const result = await this._leaderboardModel.getAllHomeTeams();
    const currentLeaderboard = leaderboardHomeGenerate(result);
    return { status: 200, result: currentLeaderboard };
  }

  async getAllAwayTeams(): Promise<ILeaderboardServiceResult> {
    const result = await this._leaderboardModel.getAllAwayTeams();
    return { status: 200, result };
  }
}
