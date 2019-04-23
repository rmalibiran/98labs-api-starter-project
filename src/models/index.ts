import { Sequelize } from 'sequelize';
import { IConfig } from '../config/config';
import { IDatabase } from '../typings';

import { userInitializer, UserRepository } from './user';

export const createModels = (sequelizeConfig: IConfig): IDatabase => {

  const sequelize = new Sequelize(
    sequelizeConfig.database,
    sequelizeConfig.user,
    sequelizeConfig.pass,
    {
      dialect: 'postgres',
      host: sequelizeConfig.host,
      port: sequelizeConfig.dbport,
    },
  );

  userInitializer(sequelize);

  const db: IDatabase = {
    sequelize,
    UserRepository: <UserRepository>sequelize.model('User'),
  };

  return db;

};
