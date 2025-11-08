const sequelize = require('../config/db');
const { DataTypes } = require('sequelize');

const Binnacle = sequelize.define('Binnacle', {
    action: {
        type: DataTypes.STRING(255)
    },
    table: {
        type: DataTypes.STRING(255)
    },
    facts: {
        type: DataTypes.STRING(255)
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