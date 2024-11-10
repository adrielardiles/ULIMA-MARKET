import { DataTypes } from "sequelize";
import sequelize from '../database/database.js'

const Producto = sequelize.define("Producto", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  nombre: {
    type: DataTypes.STRING,
    allowNull: false
  },
  descripcion: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  precio: {
    type: DataTypes.FLOAT,
    allowNull: false
  },
  imagen: {
    type: DataTypes.STRING,
    allowNull: false
  },
  stock: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  
  categoria_id: { 
    type: DataTypes.INTEGER,
    allowNull: false
  }
}, {
  freezeTableName: true, 
});

export default Producto;
