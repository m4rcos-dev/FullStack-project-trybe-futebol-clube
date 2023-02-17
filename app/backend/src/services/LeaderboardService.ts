import { resultLeaderboards } from '../tests/mocks/leaderboards';
import { ILeaderboardService, ILeaderboardServiceResult } from '../interfaces/LeaderboardInterface';

export default class LeaderboardService implements ILeaderboardService {
  async getAllHomeTeams(): Promise<ILeaderboardServiceResult> {
    const result = resultLeaderboards;
    return { status: 200, result };
  }
}
