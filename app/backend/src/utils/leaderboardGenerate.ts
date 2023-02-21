import { ILeaderboardTeams, IMatchesTeam } from '../interfaces/LeaderboardInterface';
import sortLeaderboard from './sortLeaderboard';

const arrayUniqueTeams = (teams: IMatchesTeam) => {
  const arrayAllTeams = Object.values(teams).map((match) => match.homeTeam?.teamName);
  const uniqueTeams = arrayAllTeams.filter((team, index, self) =>
    index === self.findIndex((t) => (
      t === team
    )));
  return uniqueTeams;
};

const calc1Leaderboard = (teams: IMatchesTeam) => {
  const result = {
    totalPoints: 0,
    totalVictories: 0,
    totalDraws: 0,
    totalLosses: 0,
    efficiency: 0,
  };
  Object.values(teams).forEach((team) => {
    if (team.homeTeamGoals > team.awayTeamGoals) result.totalVictories += 1;
    if (team.homeTeamGoals === team.awayTeamGoals) result.totalDraws += 1;
    if (team.homeTeamGoals < team.awayTeamGoals) result.totalLosses += 1;
    if (team.awayTeamGoals > team.homeTeamGoals) result.totalVictories += 1;
    if (team.awayTeamGoals === team.homeTeamGoals) result.totalDraws += 1;
    if (team.awayTeamGoals < team.homeTeamGoals) result.totalLosses += 1;
    result.totalPoints = (result.totalVictories * 3) + result.totalDraws;
    result.efficiency = Number(((result.totalPoints / (teams.length * 3)) * 100).toFixed(2));
  });
  return result;
};

const calc2Leaderboard = (teams: IMatchesTeam) => {
  const result = {
    goalsFavor: 0,
    goalsOwn: 0,
    goalsBalance: 0,
  };
  Object.values(teams).forEach((team) => {
    if (team.homeTeamGoals > team.awayTeamGoals) result.goalsFavor += team.homeTeamGoals;
    if (team.awayTeamGoals > team.homeTeamGoals) result.goalsOwn += team.awayTeamGoals;
    result.goalsBalance = result.goalsFavor - result.goalsOwn;
  });
  return result;
};

const createLeaderboard = (teams: IMatchesTeam) => {
  const { totalPoints, totalVictories,
    totalDraws, totalLosses, efficiency } = calc1Leaderboard(teams);
  const { goalsFavor, goalsOwn, goalsBalance } = calc2Leaderboard(teams);
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
      ...createLeaderboard(filterTeam),
    };
    result.push(currentTeam);
  });
  return sortLeaderboard(result as unknown as ILeaderboardTeams);
};

export default leaderboardGenerate;
