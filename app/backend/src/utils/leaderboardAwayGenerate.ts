import { ILeaderboardTeams, IMatchesAwayTeams } from '../interfaces/LeaderboardInterface';
import sortLeaderboard from './sortLeaderboard';

const arrayUniqueTeams = (teams: IMatchesAwayTeams) => {
  const arrayAllTeams = Object.values(teams).map((match) => match.awayTeam?.teamName);
  const uniqueTeams = arrayAllTeams.filter((team, index, self) =>
    index === self.findIndex((t) => (
      t === team
    )));
  return uniqueTeams;
};

const totalGames = (teams: IMatchesAwayTeams) => {
  const arrayAllTotalGames = [];
  for (let i = 0; i < arrayUniqueTeams(teams).length; i += 1) {
    let currentTeam = 0;
    for (let i2 = 0; i2 < teams.length; i2 += 1) {
      if (arrayUniqueTeams(teams)[i] === teams[i2].awayTeam?.teamName) currentTeam += 1;
    }
    arrayAllTotalGames.push(currentTeam);
  }
  return arrayAllTotalGames;
};

const totalPoints = (teams: IMatchesAwayTeams) => {
  const arrayAllTotalPoints = [];
  for (let i = 0; i < arrayUniqueTeams(teams).length; i += 1) {
    let currentTeam = 0;
    for (let i2 = 0; i2 < teams.length; i2 += 1) {
      if (arrayUniqueTeams(teams)[i] === teams[i2].awayTeam?.teamName
      && teams[i2].awayTeamGoals > teams[i2].homeTeamGoals) currentTeam += 3;
      if (arrayUniqueTeams(teams)[i] === teams[i2].awayTeam?.teamName
      && teams[i2].awayTeamGoals === teams[i2].homeTeamGoals) currentTeam += 1;
    }
    arrayAllTotalPoints.push(currentTeam);
  }
  return arrayAllTotalPoints;
};

const totalVictories = (teams: IMatchesAwayTeams) => {
  const arrayAllTotalVictories = [];
  for (let i = 0; i < arrayUniqueTeams(teams).length; i += 1) {
    let currentTeam = 0;
    for (let i2 = 0; i2 < teams.length; i2 += 1) {
      if (arrayUniqueTeams(teams)[i] === teams[i2].awayTeam?.teamName
      && teams[i2].awayTeamGoals > teams[i2].homeTeamGoals) currentTeam += 1;
    }
    arrayAllTotalVictories.push(currentTeam);
  }
  return arrayAllTotalVictories;
};

const totalDraws = (teams: IMatchesAwayTeams) => {
  const arrayAllTotalDraws = [];
  for (let i = 0; i < arrayUniqueTeams(teams).length; i += 1) {
    let currentTeam = 0;
    for (let i2 = 0; i2 < teams.length; i2 += 1) {
      if (arrayUniqueTeams(teams)[i] === teams[i2].awayTeam?.teamName
      && teams[i2].awayTeamGoals === teams[i2].homeTeamGoals) currentTeam += 1;
    }
    arrayAllTotalDraws.push(currentTeam);
  }
  return arrayAllTotalDraws;
};

const totalLosses = (teams: IMatchesAwayTeams) => {
  const arrayAllTotalLosses = [];
  for (let i = 0; i < arrayUniqueTeams(teams).length; i += 1) {
    let currentTeam = 0;
    for (let i2 = 0; i2 < teams.length; i2 += 1) {
      if (arrayUniqueTeams(teams)[i] === teams[i2].awayTeam?.teamName
      && teams[i2].awayTeamGoals < teams[i2].homeTeamGoals) currentTeam += 1;
    }
    arrayAllTotalLosses.push(currentTeam);
  }
  return arrayAllTotalLosses;
};

const goalsFavor = (teams: IMatchesAwayTeams) => {
  const arrayAllTotalFavor = [];
  for (let i = 0; i < arrayUniqueTeams(teams).length; i += 1) {
    let currentTeam = 0;
    for (let i2 = 0; i2 < teams.length; i2 += 1) {
      if (arrayUniqueTeams(teams)[i] === teams[i2]
        .awayTeam?.teamName) currentTeam += teams[i2].awayTeamGoals;
    }
    arrayAllTotalFavor.push(currentTeam);
  }
  return arrayAllTotalFavor;
};

const goalsOwn = (teams: IMatchesAwayTeams) => {
  const arrayAllTotalOwn = [];
  for (let i = 0; i < arrayUniqueTeams(teams).length; i += 1) {
    let currentTeam = 0;
    for (let i2 = 0; i2 < teams.length; i2 += 1) {
      if (arrayUniqueTeams(teams)[i] === teams[i2]
        .awayTeam?.teamName) currentTeam += teams[i2].homeTeamGoals;
    }
    arrayAllTotalOwn.push(currentTeam);
  }
  return arrayAllTotalOwn;
};

export default function leaderboardAwayGenerate(teams: IMatchesAwayTeams): ILeaderboardTeams[] {
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

  return sortLeaderboard(result as unknown as ILeaderboardTeams);
}
