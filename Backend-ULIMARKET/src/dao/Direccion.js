import { DataTypes } from "sequelize";
import sequelize from '../database/database.js'

const Direccion = sequelize.define("Direccion", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  pais_id: { 
    type: DataTypes.INTEGER,
    allowNull: false
  },
  departamento_id: { 
    type: DataTypes.INTEGER,
    allowNull: false
  },
  provincia_id: { 
    type: DataTypes.INTEGER,
    allowNull: false
  },
  distrito_id: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  calle: {
    type: DataTypes.STRING,
    allowNull: false
  },
  numero: {
    type: DataTypes.STRING,
    allowNull: false
  },
  informacionAdicional: {
    type: DataTypes.STRING,
    allowNull: true
  },
  usuario_id: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
}, {
  freezeTableName: true,
  timestamps: false
});


export default Direccion;
