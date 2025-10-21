const sequelize = require('../config/db');
const { DataTypes } = require('sequelize');

const Year = sequelize.define('Year', {
    name: {
        type: DataTypes.STRING(100),
        allowNull: false
    }
}, {
    timestamps: false,
    tableName: 'years'
});

module.exports = Year;