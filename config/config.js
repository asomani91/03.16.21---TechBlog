const Sequelize = require('sequelize');

require('dotenv').config();

// create connection to our db
const sequelize = process.env.JAWSDB_URL
    ? new Sequelize(process.env.JAWSDB_URL)
    : new Sequelize('user_db', 'b0e2c319f73269', '63daf449', {
        host: 'us-cdbr-east-03.cleardb.com',
        dialect: 'mysql',
        port: 3306
    });

module.exports = sequelize;
