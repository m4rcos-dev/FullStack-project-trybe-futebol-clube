import { ILeaderboardModel,
  ILeaderboardRepository,
  IMatchesHomeTeams } from '../interfaces/LeaderboardInterface';

export default class LeaderboardModel implements ILeaderboardModel {
  private _leaderboardRespository: ILeaderboardRepository;

  constructor(leaderboardRepository: ILeaderboardRepository) {
    this._leaderboardRespository = leaderboardRepository;
  }

  async getAllHomeTeams(): Promise<IMatchesHomeTeams> {
    const result = await this._leaderboardRespository.getAllHomeTeams();
    return result;
  }
}
