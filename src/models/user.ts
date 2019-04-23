import {
  Sequelize,
  Model,
  DataTypes,
  BuildOptions,
} from 'sequelize';

export class User extends Model {
  public id!: number;
  public email: string;
  public password: string;
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

export type UserRepository = typeof Model & {
  new (values?: object, options?: BuildOptions): User;
};

export const userInitializer = (sequelize: Sequelize): any => {

  const attributes = {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: false,
    },
  };

  const initParams = {
    sequelize,
    schema: 'public',
    tableName: 'users',
    timestamps  : true,
    underscored : true,
  };

  User.init(attributes, initParams);

};
