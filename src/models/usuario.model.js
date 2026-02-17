const {DataTypes} = require('sequelize');
const sequelize = require ('../config/database');
const Usuario = sequelize.define('usuario', { 
    id:{
         type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    nombre:{
        type: DataTypes.STRING,
        allowNull: false
        },
    correo:{
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
        }
    },
    {
        tableName: 'usuarios',
        timestamps:true
    });
    module.exports = Usuario;