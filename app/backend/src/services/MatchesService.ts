import { IMatchesModel, IMatchesResult, IMatchesService } from '../interfaces/MatchesInterface';

export default class MatchesService implements IMatchesService {
  private _matchesModel: IMatchesModel;

  constructor(matchesModel: IMatchesModel) {
    this._matchesModel = matchesModel;
  }

  async getAll(inProgress: unknown): Promise<IMatchesResult> {
    const result = await this._matchesModel.getAll(inProgress);
    return { status: 200, result };
  }
}
