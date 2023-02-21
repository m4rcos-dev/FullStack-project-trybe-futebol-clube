import { IMatchesTeam } from '../interfaces/LeaderboardInterface';

const handleLeaderboard = (teams: IMatchesTeam, type: string) => {
  const arrayHomeTeams = Object.values(teams).map((match) => match.homeTeam?.teamName);
  const arrayAwayTeams = Object.values(teams).map((match) => match.awayTeam?.teamName);
  const arrayAllTeams = [...arrayHomeTeams, ...arrayAwayTeams];
  switch (type) {
    case 'home':
      return arrayHomeTeams;
    case 'away':
      return arrayAwayTeams;
    default:
      return arrayAllTeams;
  }
};

const arrayUniqueTeams = (teams: IMatchesTeam, type: string) => {
  const uniqueTeams = handleLeaderboard(teams, type).filter((team, index, self) =>
    index === self.findIndex((t) => (
      t === team
    )));
  return uniqueTeams;
};

const calc1HomeTeams = (teams: IMatchesTeam, c: string) => {
  const result = {
    totalPoints: 0,
    totalVictories: 0,
    totalDraws: 0,
    totalLosses: 0,
    efficiency: 0,
  };
  Object.values(teams).forEach((t) => {
    if (c === t.homeTeam?.teamName && t.homeTeamGoals > t.awayTeamGoals) result.totalVictories += 1;
    if (c === t.homeTeam?.teamName && t.homeTeamGoals === t.awayTeamGoals) result.totalDraws += 1;
    if (c === t.homeTeam?.teamName && t.homeTeamGoals < t.awayTeamGoals) result.totalLosses += 1;
    result.totalPoints = (result.totalVictories * 3) + result.totalDraws;
    result.efficiency = Number(((result.totalPoints / (teams.length * 3)) * 100).toFixed(2));
  });
  return result;
};

const calc1AwayTeams = (teams: IMatchesTeam, c: string) => {
  const result = {
    totalPoints: 0,
    totalVictories: 0,
    totalDraws: 0,
    totalLosses: 0,
    efficiency: 0,
  };
  // eslint-disable-next-line complexity
  Object.values(teams).forEach((t) => {
    if (c === t.awayTeam?.teamName && t.awayTeamGoals > t.homeTeamGoals) result.totalVictories += 1;
    if (c === t.awayTeam?.teamName && t.awayTeamGoals === t.homeTeamGoals) result.totalDraws += 1;
    if (c === t.awayTeam?.teamName && t.awayTeamGoals < t.homeTeamGoals) result.totalLosses += 1;
    result.totalPoints = (result.totalVictories * 3) + result.totalDraws;
    result.efficiency = Number(((result.totalPoints / (teams.length * 3)) * 100).toFixed(2));
  });
  return result;
};

const calc2HomeTeams = (teams: IMatchesTeam, c: string) => {
  const result = {
    goalsFavor: 0,
    goalsOwn: 0,
    goalsBalance: 0,
  };
  Object.values(teams).forEach((t) => {
    if (c === t.homeTeam?.teamName) result.goalsFavor += t.homeTeamGoals;
    if (c === t.homeTeam?.teamName) result.goalsOwn += t.awayTeamGoals;
    result.goalsBalance = result.goalsFavor - result.goalsOwn;
  });
  return result;
};

const calc2AwayTeams = (teams: IMatchesTeam, c: string) => {
  const result = {
    goalsFavor: 0,
    goalsOwn: 0,
    goalsBalance: 0,
  };
  Object.values(teams).forEach((t) => {
    if (c === t.awayTeam?.teamName) result.goalsFavor += t.awayTeamGoals;
    if (c === t.awayTeam?.teamName) result.goalsOwn += t.homeTeamGoals;
    result.goalsBalance = result.goalsFavor - result.goalsOwn;
  });
  return result;
};

export { calc1HomeTeams, calc1AwayTeams, calc2HomeTeams, calc2AwayTeams, arrayUniqueTeams };
