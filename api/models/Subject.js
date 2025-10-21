const sequelize = require('../config/db');
const { DataTypes } = require('sequelize');

const Subject = sequelize.define('Subject', {
    name: {
        type: DataTypes.STRING(100),
        allowNull: false
    }
}, {
    timestamps: false,
    tableName: 'subjects'
});

module.exports = Subject;