import { DataTypes } from "sequelize";
import sequelize from '../database/database.js'


const MetodoPago = sequelize.define('MetodoPago', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },

    tipo: {
      type : DataTypes.STRING,
      allowNull: false
    },
    Numero: {
      type: DataTypes.STRING,
      allowNull: false
    },
    Propietario: {
      type: DataTypes.STRING,
      allowNull: false
    },
    CVE: {
      type: DataTypes.STRING,
      allowNull: false
    },
    valido_hasta: { 
      type: DataTypes.DATE,
      allowNull: false
    },
    usuario_id: {
      type: DataTypes.INTEGER,
      allowNull: false
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
    }
  });
  
  
  export default MetodoPago;
  