import { DataTypes } from "sequelize";
import sequelize from '../database/database.js'
import Producto from "./Producto.js";
import PedidoProductos from './PedidoProductos.js'; 

const Pedido = sequelize.define("Pedido", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  usuario_id: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  fechaCreacion: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: DataTypes.NOW
  },
  estaCancelado: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: false
  },
  monto_total: { 
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false,
    defaultValue: 0.00 
  }
}, {
  freezeTableName: true,
  timestamps: false
});


Pedido.belongsToMany(Producto, {
  through: PedidoProductos, 
  foreignKey: 'pedido_id',
  onDelete: 'CASCADE'
});

Producto.belongsToMany(Pedido, {
  through: PedidoProductos, 
  foreignKey: 'producto_id',
  onDelete: 'CASCADE'
});

export default Pedido;
