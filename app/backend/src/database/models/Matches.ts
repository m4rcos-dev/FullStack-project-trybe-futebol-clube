import { BOOLEAN, INTEGER, Model } from 'sequelize';
import db from '.';
import Teams from './Teams';

class Matches extends Model {
  id!: number;
  homeTeamId!: number;
  homeTeamGoals!: number;
  awayTeamId!: number;
  awayTeamGoals!: number;
  inProgress!: boolean;
}

Matches.init({
  id: {
    type: INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  homeTeamId: {
    type: INTEGER,
    allowNull: false,
  },
  homeTeamGoals: {
    type: INTEGER,
    allowNull: false,
  },
  awayTeamId: {
    type: INTEGER,
    allowNull: false,
  },
  awayTeamGoals: {
    type: INTEGER,
    allowNull: false,
  },
  inProgress: {
    type: BOOLEAN,
    allowNull: false,
  },
}, {
  underscored: true,
  sequelize: db,
  tableName: 'matches',
  timestamps: false,
});

Teams.hasMany(Matches, { foreignKey: 'homeTeamId', as: 'homeMatches' });
Matches.belongsTo(Teams, { foreignKey: 'homeTeamId', as: 'homeTeam' });
Teams.hasMany(Matches, { foreignKey: 'awayTeamId', as: 'awayMatches' });
Matches.belongsTo(Teams, { foreignKey: 'awayTeamId', as: 'awayTeam' });

export default Matches;
