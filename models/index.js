const { Sequelize, DataTypes } = require('sequelize');
const config = require('../config/config')[process.env.NODE_ENV || 'development'];

const sequelize = new Sequelize(config.url, {
  dialect: config.dialect,
  dialectOptions: config.dialectOptions,
});

const Task = require('./task')(sequelize, DataTypes);

const db = {
  sequelize,
  Sequelize,
  Task,
};

module.exports = db;
