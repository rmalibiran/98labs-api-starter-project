import { QueryInterface, Sequelize, DataTypes, DatabaseError } from 'sequelize';

module.exports = {
  // tslint:disable-next-line:variable-name
  up: async (queryInterface: QueryInterface, Sq: Sequelize) => {
    return queryInterface.createTable('employees', {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      companyId: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      firstName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      lastName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      dateOfBirth: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      gender: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      department: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      designation: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      salary: {
        type: DataTypes.DOUBLE,
        allowNull: false,
      },
      isHired: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
      }
    });
  },

  // tslint:disable-next-line:variable-name
  down: async (queryInterface: QueryInterface, Sq: Sequelize) => {
    // If migration fails, this will be called. Rollback your migration changes.
    return queryInterface.dropTable('employees');
  },
};
