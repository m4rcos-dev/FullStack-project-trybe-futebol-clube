export interface ITeams {
  [index: number]: {
    id: number;
    teamName: string;
    shield: string;
  }
}

export interface ITeam {
  id: number;
  teamName: string;
  shield: string;
}

export interface ITeamsResult {
  status: number,
  result: ITeams,
}

export interface ITeamResult {
  status: number,
  result?: ITeam,
  message?: string,
}

export interface ITeamsService {
  getAll(): Promise<ITeamsResult>
  getTeam(id: string): Promise<ITeamResult>
}

export interface ITeamsModel {
  getAll(): Promise<ITeams>
  getTeam(id: string): Promise<ITeam | null>
}

export interface ITeamsRepository {
  getAll(): Promise<ITeams>
  getTeam(id: string): Promise<ITeam | null>
}
