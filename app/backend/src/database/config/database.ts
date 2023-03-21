import 'dotenv/config';
import { Options } from 'sequelize';

const config: Options = {
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  host: process.env.DB_HOST,
  port: 3306,
  dialect: 'mysql',
  dialectOptions: {
    ssl: {
      required: false,
    },
  },
  define: {
    timestamps: false,
  },
}

module.exports = config;
