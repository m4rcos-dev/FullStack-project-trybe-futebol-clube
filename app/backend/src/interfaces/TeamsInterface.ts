export interface ITeams {
  [index: number]: {
    id: number;
    teamName: string;
  }
}

export interface ITeamsResult {
  status: number,
  result: ITeams,
}

export interface ITeamsService {
  getAll(): Promise<ITeamsResult>
}

export interface ITeamsModel {
  getAll(): Promise<ITeams>
}

export interface ITeamsRepository {
  getAll(): Promise<ITeams>
}
