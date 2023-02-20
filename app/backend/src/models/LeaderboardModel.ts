import { ILeaderboardModel,
  ILeaderboardRepository,
  IMatchesHomeTeams } from '../interfaces/LeaderboardInterface';
import { resultLeaderboards } from '../tests/mocks/leaderboards';

export default class LeaderboardModel implements ILeaderboardModel {
  private _leaderboardRespository: ILeaderboardRepository;

  constructor(leaderboardRepository: ILeaderboardRepository) {
    this._leaderboardRespository = leaderboardRepository;
  }

  async getAllHomeTeams(): Promise<IMatchesHomeTeams> {
    const result = await this._leaderboardRespository.getAllHomeTeams();
    return result;
  }

  async getAllAwayTeams(): Promise<IMatchesHomeTeams> {
    const result = resultLeaderboards;
    return result;
  }
}
