import { DataTypes } from "sequelize";
import sequelize from '../database/database.js'
import { Departamento } from "./Departamento.js";
import Direccion from "./Direccion.js";
import MetodoPago from "./MetodoPago.js";

export const Pais = sequelize.define('Pais', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    nombre: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });

Pais.hasMany(Departamento, {
    foreignKey: 'pais_id',
    onDelete: 'CASCADE'
});

Departamento.belongsTo(Pais, {
    foreignKey: 'pais_id',
    targetId: 'id'
});

Pais.hasMany(Direccion, {
  foreignKey: 'pais_id',
  onDelete: 'CASCADE'
});

Direccion.belongsTo(Pais, {
  foreignKey: 'pais_id',
  targetId: 'id'
});

Pais.hasMany(MetodoPago, {
  foreignKey: 'pais_id',
  onDelete: 'CASCADE'
});

MetodoPago.belongsTo(Pais, {
  foreignKey: 'pais_id',
  targetId: 'id'
});