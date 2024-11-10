import { DataTypes } from "sequelize"
import sequelize from '../database/database.js'
import Producto from './Producto.js'
import Promocion from './Promociones.js'

const Categoria = sequelize.define("Categoria_Producto",
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey : true,
            autoIncrement: true
        },
        nombre : {
            type: DataTypes.STRING
        }
    },
    {
        freeTableName : true,
        timestamps : false
    }

)

Categoria.hasMany(Producto, {
    foreignKey: "categoria_id", 
    onDelete: 'CASCADE'
});

Producto.belongsTo(Categoria, {
  foreignKey: "categoria_id",
  targetId: "id",
});

Categoria.hasMany(Promocion, {
    foreignKey: 'categoria_id',
    onDelete: 'CASCADE'
});

Promocion.belongsTo(Categoria, {
    foreignKey: 'categoria_id',
    targetId: 'id'
});
  
  

  








export default Categoria