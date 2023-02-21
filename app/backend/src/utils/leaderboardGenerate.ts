import { ILeaderboardTeams, IMatchesTeam } from '../interfaces/LeaderboardInterface';
import sortLeaderboard from './sortLeaderboard';

const arrayUniqueTeams = (teams: IMatchesTeam) => {
  const arrayHomeTeams = Object.values(teams).map((match) => match.homeTeam?.teamName);
  const arrayAwayTeams = Object.values(teams).map((match) => match.awayTeam?.teamName);
  const arrayAllTeams = [...arrayHomeTeams, ...arrayAwayTeams];
  const uniqueTeams = arrayAllTeams.filter((team, index, self) =>
    index === self.findIndex((t) => (
      t === team
    )));
  return uniqueTeams;
};

const calc1Leaderboard = (teams: IMatchesTeam, c: string) => {
  const result = {
    totalPoints: 0,
    totalVictories: 0,
    totalDraws: 0,
    totalLosses: 0,
    efficiency: 0,
  };
  // eslint-disable-next-line complexity
  Object.values(teams).forEach((t) => {
    if (c === t.homeTeam?.teamName && t.homeTeamGoals > t.awayTeamGoals) result.totalVictories += 1;
    if (c === t.homeTeam?.teamName && t.homeTeamGoals === t.awayTeamGoals) result.totalDraws += 1;
    if (c === t.homeTeam?.teamName && t.homeTeamGoals < t.awayTeamGoals) result.totalLosses += 1;
    if (c === t.awayTeam?.teamName && t.awayTeamGoals > t.homeTeamGoals) result.totalVictories += 1;
    if (c === t.awayTeam?.teamName && t.awayTeamGoals === t.homeTeamGoals) result.totalDraws += 1;
    if (c === t.awayTeam?.teamName && t.awayTeamGoals < t.homeTeamGoals) result.totalLosses += 1;
    result.totalPoints = (result.totalVictories * 3) + result.totalDraws;
    result.efficiency = Number(((result.totalPoints / (teams.length * 3)) * 100).toFixed(2));
  });
  return result;
};

const calc2Leaderboard = (teams: IMatchesTeam, c: string) => {
  const result = {
    goalsFavor: 0,
    goalsOwn: 0,
    goalsBalance: 0,
  };
  Object.values(teams).forEach((t) => {
    if (c === t.homeTeam?.teamName) result.goalsFavor += t.homeTeamGoals;
    if (c === t.awayTeam?.teamName) result.goalsFavor += t.awayTeamGoals;
    if (c === t.homeTeam?.teamName) result.goalsOwn += t.awayTeamGoals;
    if (c === t.awayTeam?.teamName) result.goalsOwn += t.homeTeamGoals;
    result.goalsBalance = result.goalsFavor - result.goalsOwn;
  });
  return result;
};

const createLeaderboard = (teams: IMatchesTeam, c: string) => {
  const { totalPoints, totalVictories,
    totalDraws, totalLosses, efficiency } = calc1Leaderboard(teams, c);
  const { goalsFavor, goalsOwn, goalsBalance } = calc2Leaderboard(teams, c);
  return {
    totalPoints,
    totalGames: teams.length,
    totalVictories,
    totalDraws,
    totalLosses,
    goalsFavor,
    goalsOwn,
    goalsBalance,
    efficiency,
  };
};

const leaderboardGenerate = (teams: IMatchesTeam) => {
  const result: ILeaderboardTeams[] = [];
  arrayUniqueTeams(teams).forEach((team) => {
    let currentTeam = {};
    const filterTeam = Object.values(teams)
      .filter((teamFilter) => teamFilter.homeTeam?.teamName === team
      || teamFilter.awayTeam?.teamName === team);
    currentTeam = {
      name: team,
      ...createLeaderboard(filterTeam, team as string),
    };
    result.push(currentTeam);
  });
  return sortLeaderboard(result as unknown as ILeaderboardTeams);
};

export default leaderboardGenerate;
