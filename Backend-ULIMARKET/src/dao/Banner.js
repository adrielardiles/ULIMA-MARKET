import { DataTypes } from "sequelize"
import sequelize from '../database/database.js'

const Banner = sequelize.define("Banner",
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey : true,
            autoIncrement: true
        },
        
        imagen : {
            type: DataTypes.STRING
        },

        categoria_id : {
            type : DataTypes.INTEGER
        }


    },
    {
        freeTableName : true,
        timestamps : false
    }
)


export default Banner