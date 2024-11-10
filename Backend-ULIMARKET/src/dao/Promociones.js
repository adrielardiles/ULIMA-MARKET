import { DataTypes } from "sequelize";
import sequelize from '../database/database.js'


const Promocion = sequelize.define('Promocion', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  imagen: {
    type: DataTypes.STRING, 
    allowNull: false
  },
  categoria_id: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
}, {
  freezeTableName: true,
  timestamps: false
});


export default Promocion;
