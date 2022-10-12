import { Sequelize } from 'sequelize';

export const sequelize = new Sequelize('projectdb', 'root', 'toor', {
  host: 'localhost',
  dialect: 'mariadb',
});
