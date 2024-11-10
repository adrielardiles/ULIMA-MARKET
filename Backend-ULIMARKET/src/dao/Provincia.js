import { DataTypes } from "sequelize";
import sequelize from '../database/database.js'
import {Distrito} from './Distrito.js'
import Direccion from "./Direccion.js";
import MetodoPago from "./MetodoPago.js";


export const Provincia = sequelize.define('Provincia', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    nombre: {
      type: DataTypes.STRING,
      allowNull: false
    },
    departamento_id: {
      type: DataTypes.INTEGER,
      allowNull: false 
    }
  });

Provincia.hasMany(Distrito, {
    foreignKey: 'provincia_id',
    onDelete: 'CASCADE'
});

Distrito.belongsTo(Provincia, {
    foreignKey: 'provincia_id',
    targetId: 'id'
});

Provincia.hasMany(Direccion, {
  foreignKey: 'provincia_id',
  onDelete: 'CASCADE'
});

Direccion.belongsTo(Provincia, {
  foreignKey: 'provincia_id',
  targetId: 'id'
});

Provincia.hasMany(MetodoPago, {
  foreignKey: 'provincia_id',
  onDelete: 'CASCADE'
});

MetodoPago.belongsTo(Provincia, {
  foreignKey: 'provincia_id',
  targetId: 'id'
});