const sequelize = require('../config/db');
const { DataTypes } = require('sequelize');

const User = sequelize.define('User', {
    role_id: {
        type: DataTypes.INTEGER
    },
    name: {
        type: DataTypes.STRING(150),
        allowNull: false
    },
    date_of_birth: {
        type: DataTypes.DATEONLY
    },
    phone: {
        type: DataTypes.BIGINT
    },
    cuil: {
        type: DataTypes.BIGINT
    },
    tuition: {
        type: DataTypes.INTEGER,
        unique: true
    },
    email: {
        type: DataTypes.STRING(150),
        unique: true
    },
    password: {
        type: DataTypes.STRING(255)
    }
}, {
    timestamps: false,
    tableName: 'users'
});

module.exports = User;