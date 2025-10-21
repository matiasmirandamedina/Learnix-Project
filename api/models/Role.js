const sequelize = require('../config/db');
const { DataTypes } = require('sequelize');

const Role = sequelize.define('Role', {
    name: {
        type: DataTypes.STRING(100),
        allowNull: false
    }
}, {
    timestamps: false,
    tableName: 'roles'
});

module.exports = Role;