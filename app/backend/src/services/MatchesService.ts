import { ITeamsService } from '../interfaces/TeamsInterface';
import {
  IBodyCreateMatche,
  IMatcheResult,
  IMatcheResultUpdate,
  IMatchesModel,
  IMatchesResult,
  IMatchesService } from '../interfaces/MatchesInterface';

export default class MatchesService implements IMatchesService {
  private _matchesModel: IMatchesModel;
  private _teamService: ITeamsService;

  constructor(matchesModel: IMatchesModel, teamService: ITeamsService) {
    this._matchesModel = matchesModel;
    this._teamService = teamService;
  }

  async getAll(inProgress: unknown): Promise<IMatchesResult> {
    const result = await this._matchesModel.getAll(inProgress);
    return { status: 200, result };
  }

  async create(body: IBodyCreateMatche): Promise<IMatcheResult> {
    const result = await this._matchesModel.create(body);
    const { homeTeamId, awayTeamId } = body;
    const validHomeTeam = await this._teamService.getTeam(homeTeamId.toString());
    const validAwayTeam = await this._teamService.getTeam(awayTeamId.toString());
    const messageHomeTeam = validHomeTeam.message;
    const messageAwayTeam = validAwayTeam.message;
    if (homeTeamId === awayTeamId) {
      return {
        status: 422,
        message: 'It is not possible to create a match with two equal teams' };
    }
    if (messageHomeTeam || messageAwayTeam) {
      return {
        status: 404,
        message: 'There is no team with such id!' };
    }
    return { status: 201, result };
  }

  async update(id: string): Promise<IMatcheResultUpdate> {
    const result = await this._matchesModel.update(id);
    if (!result) return { status: 400, message: 'Update Error' };
    return { status: 200, message: 'Finished' };
  }

  async updateById(id: string): Promise<IMatcheResultUpdate> {
    console.log(id);
    return { status: 200, message: 'Updated' };
  }
}
