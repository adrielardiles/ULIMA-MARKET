import { DataTypes } from "sequelize";
import sequelize from '../database/database.js'
import MetodoPago from "./MetodoPago.js";
import Direccion from "./Direccion.js";
import Pedido from "./Pedido.js";

const Usuario = sequelize.define(
  "Usuario",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    nombre: {
      type: DataTypes.STRING,
      allowNull: false 
    },
    usuario: {
      type: DataTypes.STRING,
      allowNull: false, 
      unique: true 
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false 
    },
    apellidoPaterno: {
      type: DataTypes.STRING,
      allowNull: true
    },
    apellidoMaterno: {
      type: DataTypes.STRING,
      allowNull: true
    },
    genero: {
      type: DataTypes.STRING,
      allowNull : false
    },
    telefono: {
      type: DataTypes.STRING,
      allowNull: true
    },
    fechaNacimiento : {
      type: DataTypes.DATE,
      allowNull : false
    },
    edad : {
      type: DataTypes.INTEGER,
      allowNull : false
   },

    isAdmin: { 
      type: DataTypes.BOOLEAN,
      defaultValue: false
    }
  },
  {
    freezeTableName: true,
    timestamps: false
  }
);

  Usuario.hasMany(MetodoPago, {
  foreignKey: 'usuario_id',
  onDelete : 'CASCADE'
  });
  
  // Relación con Usuario
  MetodoPago.belongsTo(Usuario, {
    foreignKey: 'usuario_id',
    targetKey : 'id'
  });

  Usuario.hasMany(Direccion, {
    foreignKey: 'usuario_id',
    onDelete : 'CASCADE'
    });
    
    // Relación con Usuario
    Direccion.belongsTo(Usuario, {
      foreignKey: 'usuario_id',
      targetKey : 'id'
  });

  Usuario.hasMany(Pedido, {
    foreignKey: 'usuario_id',
    onDelete : 'CASCADE'
  });
  

  Pedido.belongsTo(Usuario, {
      foreignKey: 'usuario_id',
      targetKey : 'id'
  });



export default Usuario;
