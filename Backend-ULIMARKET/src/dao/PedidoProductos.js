import { DataTypes } from "sequelize";
import sequelize from '../database/database.js'

export const PedidoProductos = sequelize.define('PedidoProductos', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  pedido_id: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  producto_id: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  cantidad: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 1
  }
}, {
  freezeTableName: true,
  timestamps: false
});






export default PedidoProductos;
