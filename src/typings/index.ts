import { Sequelize } from 'sequelize';

import { UserRepository } from '../models/user';

export interface ILogger {
  info(message: string, label: string, meta?: object): void;
  warning(message: string, label: string, meta?: object): void;
  error(message: string, label: string, meta?: object, stack?: string): void;
  debug(message: string, label: string, meta?: object): void;
}

export interface ICustomAppContext {
  logger?: ILogger;
  db?: IDatabase;
}

export interface ICustomAppState {

}

export interface IDatabase {
  sequelize: Sequelize;
  UserRepository: UserRepository;
}
