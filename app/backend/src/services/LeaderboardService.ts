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
    return { status: 200, result };
  }
}
