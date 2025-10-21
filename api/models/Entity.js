const sequelize = require('../config/db');
const { DataTypes } = require('sequelize');

const Entity = sequelize.define('Entity', {
    name: {
        type: DataTypes.STRING(100),
        allowNull: false
    }
}, {
    timestamps: false,
    tableName: 'entities'
});

module.exports = Entity;