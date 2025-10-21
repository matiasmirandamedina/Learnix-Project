const sequelize = require('../config/db');
const { DataTypes } = require('sequelize');

const StudentClass = sequelize.define('StudentClass', {
    student_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    class_sections_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
}, {
    timestamps: false,
    tableName: 'student_class'
});

module.exports = StudentClass;