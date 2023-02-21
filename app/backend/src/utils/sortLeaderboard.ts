import { ILeaderboardTeams } from '../interfaces/LeaderboardInterface';

const sortLeaderboard = (result: ILeaderboardTeams) => {
  const resultSorted = Object.values(result).sort((a, b) => {
    if (a.totalPoints !== b.totalPoints) return b.totalPoints - a.totalPoints;
    if (a.totalVictories !== b.totalVictories) return b.totalVictories - a.totalVictories;
    if (a.goalsBalance !== b.goalsBalance) return b.goalsBalance - a.goalsBalance;
    if (a.goalsFavor !== b.goalsFavor) return b.goalsFavor - a.goalsFavor;
    if (a.goalsOwn !== b.goalsOwn) return a.goalsOwn - b.goalsOwn;
    return 0;
  });
  return resultSorted;
};

export default sortLeaderboard;
