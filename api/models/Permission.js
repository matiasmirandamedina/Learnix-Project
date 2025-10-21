const sequelize = require('../config/db');
const { DataTypes } = require('sequelize');

const Permission = sequelize.define('Permission', {
    entity_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    action_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
}, {
    timestamps: false,
    tableName: 'permissions'
});

module.exports = Permission;