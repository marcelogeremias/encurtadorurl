import {Sequelize} from 'sequelize';

const sequelize = new Sequelize('mysql://user:pass@host:3306/database');

export default sequelize;