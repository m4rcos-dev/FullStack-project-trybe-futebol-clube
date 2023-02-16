import Teams from '../../database/models/Teams';
import Matches from '../../database/models/Matches';
import { IBodyCreateMatche,
  IBodyUpdateById,
  IMatcheResultCreate,
  IMatches,
  IMatchesRepository } from '../../interfaces/MatchesInterface';

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

  async create(body: IBodyCreateMatche): Promise<IMatcheResultCreate> {
    const {
      homeTeamId,
      homeTeamGoals,
      awayTeamId,
      awayTeamGoals,
    } = body;
    const result = await this.matchesModel.create({
      homeTeamId,
      homeTeamGoals,
      awayTeamId,
      awayTeamGoals,
      inProgress: true,
    });
    return result;
  }

  async update(id: string): Promise<boolean> {
    const [qtdUpdated] = await this.matchesModel.update({ inProgress: false }, {
      where: { id },
    });
    return qtdUpdated > 0;
  }

  async updateById(id: string, body: IBodyUpdateById): Promise<boolean> {
    const [qtdUpdated] = await this.matchesModel.update(
      body,
      { where: { id } },
    );

    return qtdUpdated > 0;
  }
}
// Requirement 19 and
