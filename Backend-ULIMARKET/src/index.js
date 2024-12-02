import app from './app.js'
import './dao/Categoria.js'
import './dao/CodigoVerificacion.js'
import './dao/Direccion.js'
import './dao/MetodoPago.js'
import './dao/Pedido.js'
import './dao/PedidoProductos.js'
import './dao/Producto.js'
import './dao/Promociones.js'
import './dao/Usuario.js'
import './dao/Pais.js'
import './dao/Departamento.js'
import './dao/Provincia.js'
import './dao/Distrito.js'
import  sequelize  from './database/database.js';  


async function main () {
    try {
        await sequelize.sync({force : false})
        console.log('Connection has been established successfully.');
        app.listen(3000)
        console.log('Connection has worked.', 3000);
        
    
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}

main()