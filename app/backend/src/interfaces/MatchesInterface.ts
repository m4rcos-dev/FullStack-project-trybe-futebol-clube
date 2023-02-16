export interface IMatches {
  [index: number]: {
    id: number;
    homeTeamId: number;
    homeTeamGoals: number;
    awayTeamId: number;
    awayTeamGoals: number;
    inProgress: boolean;
    homeTeam?: {
      teamName: string;
    },
    awayTeam?: {
      teamName: string;
    }
  }
}

export interface IMatchesResult {
  status: number,
  result: IMatches,
}

export interface IBodyCreateMatche {
  homeTeamId: number,
  awayTeamId: number,
  homeTeamGoals: number,
  awayTeamGoals: number,
}

export interface IMatcheResultCreate {
  id: number,
  homeTeamId: number,
  homeTeamGoals: number,
  awayTeamId: number,
  awayTeamGoals: number,
  inProgress: boolean,
}

export interface IMatchesService {
  getAll(inProgress: unknown): Promise<IMatchesResult>
  create(body: IBodyCreateMatche): Promise<IMatchesResult>
}

export interface IMatchesModel {
  getAll(inProgress: unknown): Promise<IMatches>
}

export interface IMatchesRepository {
  getAll(inProgress: unknown): Promise<IMatches>
}
