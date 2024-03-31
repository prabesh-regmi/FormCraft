const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/database');
const Input = require('./input.model');

const Form = sequelize.define('Form', {
    id: {
        type: DataTypes.UUID,
        primaryKey: true,
        unique: true,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        autoIncrement: false,
    },
    name: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
    }
});

// Association with Input
Form.hasMany(Input, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
    foreignKey: 'formId',
    as: 'inputs'
});

module.exports = Form;
