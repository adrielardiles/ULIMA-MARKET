// src/database/database.js
import { Sequelize } from "sequelize";

const sequelize = new Sequelize(
  'proyectosdb',  // Nombre de la base de datos
  'postgres',     // Usuario
  '123',          // Contraseña
  {
    host: 'localhost',
    dialect: 'postgres',
  }
);

export default  sequelize ;  
