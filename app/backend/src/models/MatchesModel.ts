import { IBodyCreateMatche, IBodyUpdateById, IMatcheResultCreate,
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
    const result = await this._matchesRepository.create(body);
    return result;
  }

  async update(id: string): Promise<boolean> {
    const result = await this._matchesRepository.update(id);
    return result;
  }

  async updateById(id: string, body: IBodyUpdateById): Promise<boolean> {
    const result = await this._matchesRepository.updateById(id, body);
    return result;
  }
}
