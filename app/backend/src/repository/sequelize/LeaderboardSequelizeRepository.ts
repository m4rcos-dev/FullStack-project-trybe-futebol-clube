import { IMatchesHomeTeams,
  ILeaderboardRepository,
  IMatchesTeam,
  IMatchesAwayTeams } from '../../interfaces/LeaderboardInterface';
import Matches from '../../database/models/Matches';
import Teams from '../../database/models/Teams';

export default class LeaderboardSequelizeRepository implements ILeaderboardRepository {
  constructor(private matchesModel = Matches) {}

  async getAllHomeTeams(): Promise<IMatchesHomeTeams> {
    const result = await this.matchesModel.findAll({
      where: { inProgress: false },
      include: [
        { model: Teams, as: 'homeTeam', attributes: { exclude: ['id'] } },
      ],
    });
    return result;
  }

  async getAllAwayTeams(): Promise<IMatchesAwayTeams> {
    const result = await this.matchesModel.findAll({
      where: { inProgress: false },
      include: [
        { model: Teams, as: 'awayTeam', attributes: { exclude: ['id'] } },
      ],
    });
    return result;
  }

  async getAllTeams(): Promise<IMatchesTeam> {
    const result = await this.matchesModel.findAll({
      where: { inProgress: false },
      include: [
        { model: Teams, as: 'homeTeam', attributes: { exclude: ['id'] } },
        { model: Teams, as: 'awayTeam', attributes: { exclude: ['id'] } },
      ],
    });
    return result;
  }
}
