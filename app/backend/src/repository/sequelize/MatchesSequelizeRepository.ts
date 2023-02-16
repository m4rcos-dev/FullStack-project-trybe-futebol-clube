import Teams from '../../database/models/Teams';
import Matches from '../../database/models/Matches';
import { IMatches, IMatchesRepository } from '../../interfaces/MatchesInterface';

export default class MatchesSequelizeRepository implements IMatchesRepository {
  constructor(private matchesModel = Matches) {}

  async getAll(inProgress: unknown): Promise<IMatches> {
    const boolInProgress = inProgress === 'true';
    if (inProgress) {
      const result = await this.matchesModel.findAll({
        where: { inProgress: boolInProgress },
        include: [
          { model: Teams, as: 'homeTeam', attributes: { exclude: ['id'] } },
          { model: Teams, as: 'awayTeam', attributes: { exclude: ['id'] } },
        ],
      });
      return result;
    }
    const result = await this.matchesModel.findAll({
      include: [
        { model: Teams, as: 'homeTeam', attributes: { exclude: ['id'] } },
        { model: Teams, as: 'awayTeam', attributes: { exclude: ['id'] } },
      ],
    });
    return result;
  }
}
// Requirement 19
