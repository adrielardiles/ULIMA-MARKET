import { DataTypes } from "sequelize";
import sequelize from '../database/database.js'
import Direccion from "./Direccion.js";
import MetodoPago from './MetodoPago.js'


export const Distrito = sequelize.define('Distrito', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    nombre: {
      type: DataTypes.STRING,
      allowNull: false
    },
    provincia_id: {
      type: DataTypes.INTEGER,
      allowNull: false 
    }
  });
  
Distrito.hasMany(Direccion, {
  foreignKey: 'distrito_id',
  onDelete: 'CASCADE'
});

Direccion.belongsTo(Distrito, {
  foreignKey: 'distrito_id',
  targetId: 'id'
});

Distrito.hasMany(MetodoPago, {
  foreignKey: 'distrito_id',
  onDelete: 'CASCADE'
});

MetodoPago.belongsTo(Distrito, {
  foreignKey: 'distrito_id',
  targetId: 'id'
});

