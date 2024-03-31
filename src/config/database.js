const { Sequelize } = require('sequelize');
const config = require('./config');

// Create a new Sequelize instance using your MySQL database information
const sequelize = new Sequelize(config.database.name, config.database.username, config.database.password, {
    host: config.database.host,
    port: config.database.port,
    dialect: 'mysql',
    logging: false, // Toggle logging if needed
  });
module.exports = { sequelize }