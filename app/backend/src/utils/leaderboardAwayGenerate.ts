import { ILeaderboardTeams, IMatchesTeam } from '../interfaces/LeaderboardInterface';
import { arrayUniqueTeams,
  calc1AwayTeams,
  calc2AwayTeams } from './leaderboardGenerate';
import sortLeaderboard from './sortLeaderboard';

const createLeaderboard = (teams: IMatchesTeam, c: string) => {
  const { totalPoints, totalVictories,
    totalDraws, totalLosses, efficiency } = calc1AwayTeams(teams, c);
  const { goalsFavor, goalsOwn, goalsBalance } = calc2AwayTeams(teams, c);
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

const leaderboardHomeGenerate = (teams: IMatchesTeam) => {
  const result: ILeaderboardTeams[] = [];
  arrayUniqueTeams(teams, 'away').forEach((team) => {
    let currentTeam = {};
    const filterTeam = Object.values(teams)
      .filter((teamFilter) => teamFilter.homeTeam?.teamName === team
      || teamFilter.awayTeam?.teamName === team);
    currentTeam = {
      name: team,
      shield: filterTeam[0].awayTeam?.shield,
      ...createLeaderboard(filterTeam, team as string),
    };
    result.push(currentTeam);
  });
  return sortLeaderboard(result as unknown as ILeaderboardTeams);
};

export default leaderboardHomeGenerate;
