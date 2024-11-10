import express from 'express';
import * as UbicacionController from '../controllers/ubicacion.controller.js';
import * as ProductoController from '../controllers/productos.controller.js';
import * as PedidoController from '../controllers/pedido.controller.js';
import * as UsuarioController from '../controllers/usuario.controller.js';
import * as CodigoVerificacionController from '../controllers/verificacion.controller.js';
import * as CategoriaController from '../controllers/categoria.controller.js';
import * as PromocionController from '../controllers/promocion.controller.js';
import * as metodoPago from "../controllers/metodoPago.controller.js";
import * as direccion from "../controllers/direccion.controller.js";

const router = express.Router();

// UBICACIONES
// Rutas para Países
router.post("/pais", UbicacionController.crearPaises);
router.get("/pais", UbicacionController.obtenerPaises);

// Rutas para Departamentos
router.post("/departamento", UbicacionController.crearDepartamentos);
router.get("/departamento", UbicacionController.obtenerDepartamentos);

// Rutas para Provincias
router.post("/provincia", UbicacionController.crearProvincias);
router.get("/provincia", UbicacionController.obtenerProvincias);

// Rutas para Distritos
router.post("/distrito", UbicacionController.crearDistritos);
router.get("/distrito", UbicacionController.obtenerDistritos);


// PRODUCTO
router.post("/productos", ProductoController.crearProducto);
router.get("/productos", ProductoController.obtenerProductos);
router.get("/productos/:id", ProductoController.obtenerProductoPorId);
router.put("/productos/:id", ProductoController.actualizarProducto);
router.delete("/productos/:id", ProductoController.eliminarProducto);
router.get("/productos/categoria/:categoria_id", ProductoController.obtenerProductosPorCategoria);

// PEDIDO
router.post("/pedidos", PedidoController.crearPedido);
router.get("/pedidos", PedidoController.obtenerPedidos);
router.get("/pedidos/:id", PedidoController.obtenerPedidoPorId);
router.put("/pedidos/:id", PedidoController.actualizarEstadoPedido);
router.delete("/pedidos/:id", PedidoController.eliminarPedido);

// USUARIO
router.post("/usuario", UsuarioController.crearUsuario);
router.get("/usuario", UsuarioController.obtenerUsuarios);
router.get("/usuario/:id", UsuarioController.obtenerUsuarioPorId);
router.put("/usuario/:id", UsuarioController.actualizarUsuario);
router.delete("/usuario/:id", UsuarioController.eliminarUsuario);
router.post("/login", UsuarioController.iniciarSesion);

// CÓDIGO DE VERIFICACIÓN
router.post("/generarCodigo", CodigoVerificacionController.generarCodigo);
router.post("/verificarCodigo", CodigoVerificacionController.verificarCodigo);
router.delete("/eliminarCodigosExpirados", CodigoVerificacionController.eliminarCodigosExpirados);

// CATEGORIA
router.get("/categorias", CategoriaController.obtenerCategorias);
router.get("/categorias/:id", CategoriaController.obtenerCategoriaPorId);
router.post("/categorias", CategoriaController.crearCategoria);
router.put("/categorias/:id", CategoriaController.actualizarCategoria);
router.delete("/categorias/:id", CategoriaController.eliminarCategoria);

// PROMOCIÓN
router.post("/promociones", PromocionController.crearPromocion);
router.get("/promociones", PromocionController.obtenerPromociones);
router.get("/promociones/:id", PromocionController.obtenerPromocionPorId);
router.put("/promociones/:id", PromocionController.actualizarPromocion);
router.delete("/promociones/:id", PromocionController.eliminarPromocion);
router.get("/promociones/categoria/:categoria_id", PromocionController.obtenerPromocionesPorCategoria);



// Rutas para MetodoPago
router.post("/metodopago", metodoPago.crearMetodoPago);
router.get("/metodopago", metodoPago.obtenerMetodosPago);
router.get("/metodopago/:id", metodoPago.obtenerMetodoPagoPorId);
router.put("/metodopago/:id", metodoPago.actualizarMetodoPago);
router.delete("/metodopago/:id", metodoPago.eliminarMetodoPago);

// Rutas para Direccion
router.post("/direccion", direccion.crearDireccion);
router.get("/direccion", direccion.obtenerDirecciones);
router.get("/direccion/:id", direccion.obtenerDireccionPorId);
router.put("/direccion/:id", direccion.actualizarDireccion);
router.delete("/direccion/:id", direccion.eliminarDireccion);






export default router;
