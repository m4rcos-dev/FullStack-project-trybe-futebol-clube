import { ILeaderboardHomeTeams, IMatchesHomeTeams } from '../interfaces/LeaderboardInterface';

const arrayUniqueTeams = (teams: IMatchesHomeTeams) => {
  const arrayAllTeams = Object.values(teams).map((match) => match.homeTeam?.teamName);
  const uniqueTeams = arrayAllTeams.filter((team, index, self) =>
    index === self.findIndex((t) => (
      t === team
    )));
  return uniqueTeams;
};

const totalGames = (teams: IMatchesHomeTeams) => {
  const arrayAllTotalGames = [];
  for (let i = 0; i < arrayUniqueTeams(teams).length; i += 1) {
    let currentTeam = 0;
    for (let i2 = 0; i2 < teams.length; i2 += 1) {
      if (arrayUniqueTeams(teams)[i] === teams[i2].homeTeam?.teamName) currentTeam += 1;
    }
    arrayAllTotalGames.push(currentTeam);
  }
  return arrayAllTotalGames;
};

const totalPoints = (teams: IMatchesHomeTeams) => {
  const arrayAllTotalPoints = [];
  for (let i = 0; i < arrayUniqueTeams(teams).length; i += 1) {
    let currentTeam = 0;
    for (let i2 = 0; i2 < teams.length; i2 += 1) {
      if (arrayUniqueTeams(teams)[i] === teams[i2].homeTeam?.teamName
      && teams[i2].homeTeamGoals > teams[i2].awayTeamGoals) currentTeam += 3;
      if (arrayUniqueTeams(teams)[i] === teams[i2].homeTeam?.teamName
      && teams[i2].homeTeamGoals === teams[i2].awayTeamGoals) currentTeam += 1;
    }
    arrayAllTotalPoints.push(currentTeam);
  }
  return arrayAllTotalPoints;
};

const totalVictories = (teams: IMatchesHomeTeams) => {
  const arrayAllTotalVictories = [];
  for (let i = 0; i < arrayUniqueTeams(teams).length; i += 1) {
    let currentTeam = 0;
    for (let i2 = 0; i2 < teams.length; i2 += 1) {
      if (arrayUniqueTeams(teams)[i] === teams[i2].homeTeam?.teamName
      && teams[i2].homeTeamGoals > teams[i2].awayTeamGoals) currentTeam += 1;
    }
    arrayAllTotalVictories.push(currentTeam);
  }
  return arrayAllTotalVictories;
};

const totalDraws = (teams: IMatchesHomeTeams) => {
  const arrayAllTotalDraws = [];
  for (let i = 0; i < arrayUniqueTeams(teams).length; i += 1) {
    let currentTeam = 0;
    for (let i2 = 0; i2 < teams.length; i2 += 1) {
      if (arrayUniqueTeams(teams)[i] === teams[i2].homeTeam?.teamName
      && teams[i2].homeTeamGoals === teams[i2].awayTeamGoals) currentTeam += 1;
    }
    arrayAllTotalDraws.push(currentTeam);
  }
  return arrayAllTotalDraws;
};

const totalLosses = (teams: IMatchesHomeTeams) => {
  const arrayAllTotalLosses = [];
  for (let i = 0; i < arrayUniqueTeams(teams).length; i += 1) {
    let currentTeam = 0;
    for (let i2 = 0; i2 < teams.length; i2 += 1) {
      if (arrayUniqueTeams(teams)[i] === teams[i2].homeTeam?.teamName
      && teams[i2].homeTeamGoals < teams[i2].awayTeamGoals) currentTeam += 1;
    }
    arrayAllTotalLosses.push(currentTeam);
  }
  return arrayAllTotalLosses;
};

const goalsFavor = (teams: IMatchesHomeTeams) => {
  const arrayAllTotalFavor = [];
  for (let i = 0; i < arrayUniqueTeams(teams).length; i += 1) {
    let currentTeam = 0;
    for (let i2 = 0; i2 < teams.length; i2 += 1) {
      if (arrayUniqueTeams(teams)[i] === teams[i2]
        .homeTeam?.teamName) currentTeam += teams[i2].homeTeamGoals;
    }
    arrayAllTotalFavor.push(currentTeam);
  }
  return arrayAllTotalFavor;
};

const goalsOwn = (teams: IMatchesHomeTeams) => {
  const arrayAllTotalOwn = [];
  for (let i = 0; i < arrayUniqueTeams(teams).length; i += 1) {
    let currentTeam = 0;
    for (let i2 = 0; i2 < teams.length; i2 += 1) {
      if (arrayUniqueTeams(teams)[i] === teams[i2]
        .homeTeam?.teamName) currentTeam += teams[i2].awayTeamGoals;
    }
    arrayAllTotalOwn.push(currentTeam);
  }
  return arrayAllTotalOwn;
};

const sortResult = (result: ILeaderboardHomeTeams) => {
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

export default function leaderboardHomeGenerate(teams: IMatchesHomeTeams): ILeaderboardHomeTeams[] {
  const result = [];

  for (let i = 0; i < arrayUniqueTeams(teams).length; i += 1) {
    let currentTeam = {};
    currentTeam = {
      name: arrayUniqueTeams(teams)[i],
      totalPoints: totalPoints(teams)[i],
      totalGames: totalGames(teams)[i],
      totalVictories: totalVictories(teams)[i],
      totalDraws: totalDraws(teams)[i],
      totalLosses: totalLosses(teams)[i],
      goalsFavor: goalsFavor(teams)[i],
      goalsOwn: goalsOwn(teams)[i],
      goalsBalance: goalsFavor(teams)[i] - goalsOwn(teams)[i],
      efficiency: Number(((totalPoints(teams)[i] / (totalGames(teams)[i] * 3)) * 100).toFixed(2)),
    };
    result.push(currentTeam);
  }

  return sortResult(result as unknown as ILeaderboardHomeTeams);
}
