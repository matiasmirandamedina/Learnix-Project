const sequelize = require('../config/db');
const { DataTypes } = require('sequelize');

const Binnacle = sequelize.define('Binnacle', {
    action_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    fact: {
        type: DataTypes.INTEGER
    },
    old_value: {
        type: DataTypes.STRING(255)
    },
    new_value: {
        type: DataTypes.STRING(255)
    },
    created_at: {
        type: DataTypes.DATEONLY
    }
}, {
    timestamps: false,
    tableName: 'binnacles'
});

module.exports = Binnacle;