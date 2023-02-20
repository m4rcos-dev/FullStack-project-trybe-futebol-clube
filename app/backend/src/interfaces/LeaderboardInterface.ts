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

export interface IMatchesAwayTeams {
  [index: number]: {
    id: number,
    homeTeamId: number,
    homeTeamGoals: number,
    awayTeamId: number,
    awayTeamGoals: number,
    inProgress: boolean,
    awayTeam?: {
      teamName: string,
    },
  }
  length: number;
}

export interface IMatchesTeam {
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
      teamName: string,
    },
  }
}

// export interface IMatcheHomeTeam {
//   [index: number]: {
//     id: number;
//     homeTeamId: number;
//     homeTeamGoals: number;
//     awayTeamId: number;
//     awayTeamGoals: number;
//     inProgress: boolean;
//     homeTeam: {
//       teamName: string;
//     },
//   }
// }

// export interface IMatcheAwayTeam {
//   [index: number]: {
//     id: number;
//     homeTeamId: number;
//     homeTeamGoals: number;
//     awayTeamId: number;
//     awayTeamGoals: number;
//     inProgress: boolean;
//     awayTeam: {
//       teamName: string;
//     },
//   }
// }

export interface ILeaderboardTeams {
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
  result: ILeaderboardTeams[] | IMatchesHomeTeams | IMatchesTeam | IMatchesAwayTeams,
}

export interface ILeaderboardService {
  getAllHomeTeams(): Promise<ILeaderboardServiceResult>
  getAllAwayTeams(): Promise<ILeaderboardServiceResult>
  getAllTeams(): Promise<ILeaderboardServiceResult>
}

export interface ILeaderboardModel {
  getAllHomeTeams(): Promise<IMatchesHomeTeams>
  getAllAwayTeams(): Promise<IMatchesAwayTeams>
  getAllTeams(): Promise<IMatchesTeam>
}

export interface ILeaderboardRepository {
  getAllHomeTeams(): Promise<IMatchesHomeTeams>
  getAllAwayTeams(): Promise<IMatchesAwayTeams>
  getAllTeams(): Promise<IMatchesTeam>
}
