import { ILeaderboardTeams, IMatchesTeam } from '../interfaces/LeaderboardInterface';

const arrayUniqueTeams = (teams: IMatchesTeam) => {
  const arrayAllTeams = Object.values(teams).map((match) => match.homeTeam?.teamName);
  const uniqueTeams = arrayAllTeams.filter((team, index, self) =>
    index === self.findIndex((t) => (
      t === team
    )));
  return uniqueTeams;
};

const totalGames = (teams: IMatchesTeam) => {
  const arrayAllTotalGames = [];
  for (let i = 0; i < arrayUniqueTeams(teams).length; i += 1) {
    let currentTeam = 0;
    for (let i2 = 0; i2 < teams.length; i2 += 1) {
      if (arrayUniqueTeams(teams)[i] === teams[i2].homeTeam?.teamName) currentTeam += 1;
      if (arrayUniqueTeams(teams)[i] === teams[i2].awayTeam?.teamName) currentTeam += 1;
    }
    arrayAllTotalGames.push(currentTeam);
  }
  return arrayAllTotalGames;
};

const totalPointsHome = (teams: IMatchesTeam, i: number, i2: number) => {
  let currentTeam = 0;
  if (arrayUniqueTeams(teams)[i] === teams[i2].homeTeam?.teamName
      && teams[i2].homeTeamGoals > teams[i2].awayTeamGoals) currentTeam += 3;
  if (arrayUniqueTeams(teams)[i] === teams[i2].homeTeam?.teamName
      && teams[i2].homeTeamGoals === teams[i2].awayTeamGoals) currentTeam += 1;
  return currentTeam;
};

const totalPoints = (teams: IMatchesTeam) => {
  const arrayAllTotalPoints = [];
  for (let i = 0; i < arrayUniqueTeams(teams).length; i += 1) {
    let currentTeam = 0;
    for (let i2 = 0; i2 < teams.length; i2 += 1) {
      const home = totalPointsHome(teams, i, i2);
      currentTeam += home;
      if (arrayUniqueTeams(teams)[i] === teams[i2].homeTeam?.teamName
      && teams[i2].awayTeamGoals > teams[i2].homeTeamGoals) currentTeam += 3;
      if (arrayUniqueTeams(teams)[i] === teams[i2].homeTeam?.teamName
      && teams[i2].awayTeamGoals === teams[i2].homeTeamGoals) currentTeam += 1;
    }
    arrayAllTotalPoints.push(currentTeam);
  }
  return arrayAllTotalPoints;
};

const totalVictories = (teams: IMatchesTeam) => {
  const arrayAllTotalVictories = [];
  for (let i = 0; i < arrayUniqueTeams(teams).length; i += 1) {
    let currentTeam = 0;
    for (let i2 = 0; i2 < teams.length; i2 += 1) {
      if (arrayUniqueTeams(teams)[i] === teams[i2].homeTeam?.teamName
      && teams[i2].homeTeamGoals > teams[i2].awayTeamGoals) currentTeam += 1;
      if (arrayUniqueTeams(teams)[i] === teams[i2].awayTeam?.teamName
      && teams[i2].awayTeamGoals > teams[i2].homeTeamGoals) currentTeam += 1;
    }
    arrayAllTotalVictories.push(currentTeam);
  }
  return arrayAllTotalVictories;
};

const totalDraws = (teams: IMatchesTeam) => {
  const arrayAllTotalDraws = [];
  for (let i = 0; i < arrayUniqueTeams(teams).length; i += 1) {
    let currentTeam = 0;
    for (let i2 = 0; i2 < teams.length; i2 += 1) {
      if (arrayUniqueTeams(teams)[i] === teams[i2].homeTeam?.teamName
      && teams[i2].homeTeamGoals === teams[i2].awayTeamGoals) currentTeam += 1;
      if (arrayUniqueTeams(teams)[i] === teams[i2].awayTeam?.teamName
      && teams[i2].awayTeamGoals === teams[i2].homeTeamGoals) currentTeam += 1;
    }
    arrayAllTotalDraws.push(currentTeam);
  }
  return arrayAllTotalDraws;
};

const totalLosses = (teams: IMatchesTeam) => {
  const arrayAllTotalLosses = [];
  for (let i = 0; i < arrayUniqueTeams(teams).length; i += 1) {
    let currentTeam = 0;
    for (let i2 = 0; i2 < teams.length; i2 += 1) {
      if (arrayUniqueTeams(teams)[i] === teams[i2].homeTeam?.teamName
      && teams[i2].homeTeamGoals < teams[i2].awayTeamGoals) currentTeam += 1;
      if (arrayUniqueTeams(teams)[i] === teams[i2].awayTeam?.teamName
      && teams[i2].awayTeamGoals < teams[i2].homeTeamGoals) currentTeam += 1;
    }
    arrayAllTotalLosses.push(currentTeam);
  }
  return arrayAllTotalLosses;
};

const goalsFavor = (teams: IMatchesTeam) => {
  const arrayAllTotalFavor = [];
  for (let i = 0; i < arrayUniqueTeams(teams).length; i += 1) {
    let currentTeam = 0;
    for (let i2 = 0; i2 < teams.length; i2 += 1) {
      if (arrayUniqueTeams(teams)[i] === teams[i2].homeTeam?.teamName
      && teams[i2].homeTeamGoals > teams[i2].awayTeamGoals) currentTeam += teams[i2].homeTeamGoals;
      if (arrayUniqueTeams(teams)[i] === teams[i2].awayTeam?.teamName
      && teams[i2].awayTeamGoals > teams[i2].homeTeamGoals) currentTeam += teams[i2].awayTeamGoals;
    }
    arrayAllTotalFavor.push(currentTeam);
  }
  return arrayAllTotalFavor;
};

const goalsOwn = (teams: IMatchesTeam) => {
  const arrayAllTotalFavor = [];
  for (let i = 0; i < arrayUniqueTeams(teams).length; i += 1) {
    let currentTeam = 0;
    for (let i2 = 0; i2 < teams.length; i2 += 1) {
      if (arrayUniqueTeams(teams)[i] === teams[i2].homeTeam?.teamName
      && teams[i2].homeTeamGoals < teams[i2].awayTeamGoals) currentTeam += teams[i2].homeTeamGoals;
      if (arrayUniqueTeams(teams)[i] === teams[i2].awayTeam?.teamName
      && teams[i2].awayTeamGoals < teams[i2].homeTeamGoals) currentTeam += teams[i2].awayTeamGoals;
    }
    arrayAllTotalFavor.push(currentTeam);
  }
  return arrayAllTotalFavor;
};

const sortResult = (result: ILeaderboardTeams) => {
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

export default function leaderboardGenerate(teams: IMatchesTeam): ILeaderboardTeams[] {
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

  return sortResult(result as unknown as ILeaderboardTeams);
}
