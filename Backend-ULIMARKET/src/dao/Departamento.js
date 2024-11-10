import { DataTypes } from "sequelize";
import sequelize from '../database/database.js'
import { Provincia } from "./Provincia.js";
import Direccion from "./Direccion.js";
import MetodoPago from "./MetodoPago.js";

export const Departamento = sequelize.define('Departamento', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    nombre: {
      type: DataTypes.STRING,
      allowNull: false
    },
    pais_id: { 
      type: DataTypes.INTEGER,
      allowNull: false 
    }
  });


Departamento.hasMany(Provincia, {
    foreignKey: 'departamento_id',
    onDelete: 'CASCADE'
});

Provincia.belongsTo(Departamento, {
    foreignKey: 'departamento_id',
    targetId: 'id'
});

Departamento.hasMany(Direccion, {
  foreignKey: 'departamento_id',
  onDelete: 'CASCADE'
});

Direccion.belongsTo(Departamento, {
  foreignKey: 'departamento_id',
  targetId: 'id'
});

Departamento.hasMany(MetodoPago, {
  foreignKey: 'departamento_id',
  onDelete: 'CASCADE'
});

MetodoPago.belongsTo(Departamento, {
  foreignKey: 'departamento_id',
  targetId: 'id'
});