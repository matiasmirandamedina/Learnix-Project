const sequelize = require('../config/db');
const { DataTypes } = require('sequelize');

const Course = sequelize.define('Course', {
    name: {
        type: DataTypes.STRING(100),
        allowNull: false
    }
}, {
    timestamps: false,
    tableName: 'courses'
});

module.exports = Course;