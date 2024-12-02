import { DataTypes } from "sequelize";
import sequelize from '../database/database.js'

const CodigoVerificacion = sequelize.define('CodigoVerificacion', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    correo: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    codigo: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    expiracion: {
      type: DataTypes.DATE,
      allowNull: false,
    },
  });

  export default CodigoVerificacion