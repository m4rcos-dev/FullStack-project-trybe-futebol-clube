export interface IMatches {
  [index: number]: {
    id: number;
    homeTeamId: number;
    homeTeamGoals: number;
    awayTeamId: number;
    awayTeamGoals: number;
    inProgress: boolean;
    homeTeam: {
      teamName: string;
    },
    awayTeam: {
      teamName: string;
    }
  }
}

export interface IMatchesResult {
  status: number,
  result: IMatches,
}

export interface IMatchesService {
  getAll(): Promise<IMatchesResult>
}
