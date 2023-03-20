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
      shield: string;
    },
    awayTeam?: {
      teamName: string;
      shield: string;
    }
  }
}

export interface IMatchesResult {
  status: number,
  result: IMatches,
}

export interface IMatcheResult {
  status: number,
  result?: IMatcheResultCreate,
  message?: string,
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

export interface IMatcheResultUpdate {
  status: number,
  message: string,
}

export interface IBodyUpdateById {
  homeTeamGoals: number,
  awayTeamGoals: number,
}

export interface IMatchesService {
  getAll(inProgress: unknown): Promise<IMatchesResult>
  create(body: IBodyCreateMatche): Promise<IMatcheResult>
  update(id: string): Promise<IMatcheResultUpdate>
  updateById(id: string, body: IBodyUpdateById): Promise<IMatcheResultUpdate>
}

export interface IMatchesModel {
  getAll(inProgress: unknown): Promise<IMatches>
  create(body: IBodyCreateMatche): Promise<IMatcheResultCreate>
  update(id: string): Promise<boolean>
  updateById(id: string, body: IBodyUpdateById): Promise<boolean>
}

export interface IMatchesRepository {
  getAll(inProgress: unknown): Promise<IMatches>
  create(body: IBodyCreateMatche): Promise<IMatcheResultCreate>
  update(id: string): Promise<boolean>
  updateById(id: string, body: IBodyUpdateById): Promise<boolean>
}
