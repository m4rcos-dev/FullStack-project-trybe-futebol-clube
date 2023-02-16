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
    const { homeTeamId, awayTeamId } = body;
    if (homeTeamId === awayTeamId) {
      return {
        status: 422,
        message: 'It is not possible to create a match with two equal teams' };
    }
    return { status: 201, result };
  }

  async update(id: string): Promise<IMatcheResultUpdate> {
    const result = await this._matchesModel.update(id);
    if (!result) return { status: 400, message: 'Update Error' };
    return { status: 200, message: 'Finished' };
  }
}
