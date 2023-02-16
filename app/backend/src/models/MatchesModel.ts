import { resultCreateMatche } from '../tests/mocks/matches';
import { IBodyCreateMatche, IMatcheResultCreate,
  IMatches,
  IMatchesModel,
  IMatchesRepository } from '../interfaces/MatchesInterface';

export default class MatchesModel implements IMatchesModel {
  private _matchesRepository: IMatchesRepository;

  constructor(matchesRespository: IMatchesRepository) {
    this._matchesRepository = matchesRespository;
  }

  async getAll(inProgress: unknown): Promise<IMatches> {
    const result = await this._matchesRepository.getAll(inProgress);
    return result;
  }

  async create(body: IBodyCreateMatche): Promise<IMatcheResultCreate> {
    console.log(body);
    const result = resultCreateMatche;
    return result;
  }
}
