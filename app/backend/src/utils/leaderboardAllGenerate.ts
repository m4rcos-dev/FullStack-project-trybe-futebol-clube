import { ILeaderboardTeams, IMatchesTeam } from '../interfaces/LeaderboardInterface';
import { arrayUniqueTeams,
  calc1AwayTeams,
  calc1HomeTeams,
  calc2AwayTeams,
  calc2HomeTeams } from './leaderboardGenerate';
import sortLeaderboard from './sortLeaderboard';

const createLeaderboard = (teams: IMatchesTeam, c: string) => {
  const { totalPoints, totalVictories,
    totalDraws, totalLosses, efficiency } = calc1HomeTeams(teams, c);
  const calc01AwayTeams = calc1AwayTeams(teams, c);
  const { goalsFavor, goalsOwn, goalsBalance } = calc2HomeTeams(teams, c);
  const calc02AwayTeams = calc2AwayTeams(teams, c);
  return {
    totalPoints: totalPoints + calc01AwayTeams.totalPoints,
    totalGames: teams.length,
    totalVictories: totalVictories + calc01AwayTeams.totalVictories,
    totalDraws: totalDraws + calc01AwayTeams.totalDraws,
    totalLosses: totalLosses + calc01AwayTeams.totalLosses,
    goalsFavor: goalsFavor + calc02AwayTeams.goalsFavor,
    goalsOwn: goalsOwn + calc02AwayTeams.goalsOwn,
    goalsBalance: goalsBalance + calc02AwayTeams.goalsBalance,
    efficiency: (efficiency + calc01AwayTeams.efficiency).toFixed(2),
  };
};

const leaderboardAllGenerate = (teams: IMatchesTeam) => {
  const result: ILeaderboardTeams[] = [];
  arrayUniqueTeams(teams, 'all').forEach((team) => {
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

export default leaderboardAllGenerate;
