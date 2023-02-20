import leaderboardHomeGenerate from '../utils/leaderboardHomeGenerate';
import leaderboardAwayGenerate from '../utils/leaderboardAwayGenerate';
import { ILeaderboardModel,
  ILeaderboardService,
  ILeaderboardServiceResult } from '../interfaces/LeaderboardInterface';
import leaderboardGenerate from '../utils/leaderboardGenerate';

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
    const currentLeaderboard = leaderboardAwayGenerate(result);
    return { status: 200, result: currentLeaderboard };
  }

  async getAllTeams(): Promise<ILeaderboardServiceResult> {
    const result = await this._leaderboardModel.getAllTeams();
    const currentLeaderboard = leaderboardGenerate(result);
    return { status: 200, result: currentLeaderboard };
  }
}
