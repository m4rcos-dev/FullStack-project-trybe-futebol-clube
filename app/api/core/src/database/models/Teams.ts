import { STRING, INTEGER, Model } from 'sequelize';
import db from '.';

class Teams extends Model {
  id!: number;
  teamName!: string;
  shield!: string;
}

Teams.init({
  id: {
    type: INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  teamName: {
    allowNull: false,
    type: STRING,
    unique: true,
  },
  shield: {
    allowNull: false,
    type: STRING,
  }
}, {
  underscored: true,
  sequelize: db,
  tableName: 'teams',
  timestamps: false,
});

export default Teams;
// Requirement 14
