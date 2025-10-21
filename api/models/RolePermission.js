const sequelize = require('../config/db');
const { DataTypes } = require('sequelize');

const RolePermission = sequelize.define('RolePermission', {
    role_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    permission_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
}, {
    timestamps: false,
    tableName: 'role_permissions'
});

module.exports = RolePermission;