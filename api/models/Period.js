const sequelize = require('../config/db');
const { DataTypes } = require('sequelize');

const Period = sequelize.define('Period', {
    name: {
        type: DataTypes.STRING(100),
        allowNull: false
    },
    date_init: {
        type: DataTypes.DATEONLY,
        allowNull: false
    },
    date_end: {
        type: DataTypes.DATEONLY,
        allowNull: false
    }
}, {
    timestamps: false,
    tableName: 'periods'
});

module.exports = Period;