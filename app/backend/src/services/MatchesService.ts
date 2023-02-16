import {
  IBodyCreateMatche,
  IMatcheResult,
  IMatcheResultUpdate,
  IMatchesModel,
  IMatchesResult,
  IMatchesService } from '../interfaces/MatchesInterface';

export default class MatchesService implements IMatchesService {
  private _matchesModel: IMatchesModel;

  constructor(matchesModel: IMatchesModel) {
    this._matchesModel = matchesModel;
  }

  async getAll(inProgress: unknown): Promise<IMatchesResult> {
    const result = await this._matchesModel.getAll(inProgress);
    return { status: 200, result };
  }

  async create(body: IBodyCreateMatche): Promise<IMatcheResult> {
    const result = await this._matchesModel.create(body);
    return { status: 201, result };
  }

  async update(id: string): Promise<IMatcheResultUpdate> {
    console.log(id);
    return { status: 200, message: 'Finished' };
  }
}
