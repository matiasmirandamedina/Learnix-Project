const sequelize = require('../config/db');
const { DataTypes } = require('sequelize');

const Action = sequelize.define('Action', {
    name: {
        type: DataTypes.STRING(100),
        allowNull: false
    }
}, {
    timestamps: false,
    tableName: 'actions'
});

module.exports = Action;