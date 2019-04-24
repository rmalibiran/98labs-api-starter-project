import { QueryInterface, Sequelize, DataTypes } from 'sequelize';

module.exports = {
  // tslint:disable-next-line:variable-name
  up: async (queryInterface: QueryInterface, Sq: Sequelize) => {
    return queryInterface.createTable('company', {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      address: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      phoneNumber: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    });
  },

  // tslint:disable-next-line:variable-name
  down: async (queryInterface: QueryInterface, Sq: Sequelize) => {
    return queryInterface.dropTable('company');
  },
};
