const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/database');
const Option = require('./option.model');

const Input = sequelize.define('Input', {
    id: {
        type: DataTypes.UUID,
        primaryKey: true,
        unique: true,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        autoIncrement: false,
    },
    type: {
        type: DataTypes.STRING,
        allowNull: false
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    label: {
        type: DataTypes.STRING,
        allowNull: false
    },
    value: {
        type: DataTypes.STRING,
        allowNull: true,
        defaultValue: '',
    },
    required: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false
    },
    placeholder: {
        type: DataTypes.STRING,
        allowNull: true,
        defaultValue: '',
    },
    disabled: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false
    },
});
Input.hasMany(Option, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
    foreignKey: 'inputId',
    as: 'options'
});

module.exports = Input;