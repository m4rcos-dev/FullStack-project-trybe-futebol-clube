import { ILeaderboardModel,
  ILeaderboardRepository,
  IMatchesTeam,
  IMatchesHomeTeams,
  IMatchesAwayTeams } from '../interfaces/LeaderboardInterface';

export default class LeaderboardModel implements ILeaderboardModel {
  private _leaderboardRespository: ILeaderboardRepository;

  constructor(leaderboardRepository: ILeaderboardRepository) {
    this._leaderboardRespository = leaderboardRepository;
  }

  async getAllHomeTeams(): Promise<IMatchesHomeTeams> {
    const result = await this._leaderboardRespository.getAllHomeTeams();
    return result;
  }

  async getAllAwayTeams(): Promise<IMatchesAwayTeams> {
    const result = await this._leaderboardRespository.getAllAwayTeams();
    return result;
  }

  async getAllTeams(): Promise<IMatchesTeam> {
    const result = await this._leaderboardRespository.getAllTeams();
    return result;
  }
}
