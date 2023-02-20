export interface IMatchesHomeTeams {
  [index: number]: {
    id: number,
    homeTeamId: number,
    homeTeamGoals: number,
    awayTeamId: number,
    awayTeamGoals: number,
    inProgress: boolean,
    homeTeam?: {
      teamName: string,
    },
  }
  length: number;
}

export interface IMatcheHomeTeam {
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
  }
}

export interface ILeaderboardHomeTeams {
  [index: number]: {
    name: string;
    totalPoints: number;
    totalGames: number;
    totalVictories: number;
    totalDraws: number;
    totalLosses: number;
    goalsFavor: number;
    goalsOwn: number;
    goalsBalance: number;
    efficiency: number;
  }
}

export interface ILeaderboardServiceResult {
  status: number,
  result: ILeaderboardHomeTeams[],
}

export interface ILeaderboardService {
  getAllHomeTeams(): Promise<ILeaderboardServiceResult>
}

export interface ILeaderboardModel {
  getAllHomeTeams(): Promise<IMatchesHomeTeams>
}

export interface ILeaderboardRepository {
  getAllHomeTeams(): Promise<IMatchesHomeTeams>
}
