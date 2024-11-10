import Pedido from "../dao/Pedido.js";
import Producto from "../dao/Producto.js";
import Usuario from "../dao/Usuario.js";
import PedidoProductos from "../dao/PedidoProductos.js";

// Crear un nuevo pedido
export const crearPedido = async (req, res) => {
  const { usuario_id, productos } = req.body;

  try {
    const usuario = await Usuario.findByPk(usuario_id);
    if (!usuario) {
      return res.status(404).json({ error: "Usuario no encontrado" });
    }

    const pedido = await Pedido.create({ usuario_id });

    let montoTotal = 0;
    for (const producto of productos) {
      const productoExistente = await Producto.findByPk(producto.id);
      if (!productoExistente) {
        return res.status(404).json({ error: `Producto con id ${producto.id} no encontrado` });
      }

      await PedidoProductos.create({
        pedido_id: pedido.id,
        producto_id: producto.id,
        cantidad: producto.cantidad
      });

      montoTotal += productoExistente.precio * producto.cantidad;
    }

    pedido.monto_total = montoTotal;
    await pedido.save();

    res.status(201).json(pedido);
  } catch (error) {
    res.status(500).json({ error: "Error al crear el pedido", detalle: error.message });
  }
};

// Obtener todos los pedidos
export const obtenerPedidos = async (req, res) => {
  try {
    const pedidos = await Pedido.findAll({ include: [Usuario, Producto] });
    res.status(200).json(pedidos);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener los pedidos" });
  }
};

// Obtener un pedido por ID
export const obtenerPedidoPorId = async (req, res) => {
  const { id } = req.params;
  try {
    const pedido = await Pedido.findByPk(id, { include: [Usuario, Producto] });
    if (!pedido) {
      return res.status(404).json({ error: "Pedido no encontrado" });
    }
    res.status(200).json(pedido);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener el pedido" });
  }
};

// Actualizar un pedido
export const actualizarPedido = async (req, res) => {
  const { id } = req.params;
  const { estaCancelado } = req.body;

  try {
    const pedido = await Pedido.findByPk(id);
    if (!pedido) {
      return res.status(404).json({ error: "Pedido no encontrado" });
    }

    pedido.estaCancelado = estaCancelado !== undefined ? estaCancelado : pedido.estaCancelado;

    await pedido.save();
    res.status(200).json(pedido);
  } catch (error) {
    res.status(500).json({ error: "Error al actualizar el estado del pedido", detalle: error.message });
  }
};

// Eliminar un pedido
export const eliminarPedido = async (req, res) => {
  const { id } = req.params;

  try {
    const pedido = await Pedido.findByPk(id);
    if (!pedido) {
      return res.status(404).json({ error: "Pedido no encontrado" });
    }

    await PedidoProductos.destroy({ where: { pedido_id: id } });
    await pedido.destroy();

    res.status(200).json({ message: "Pedido eliminado correctamente" });
  } catch (error) {
    res.status(500).json({ error: "Error al eliminar el pedido" });
  }
};

// Actualizar estado de cancelación del pedido
export const actualizarEstadoPedido = async (req, res) => {
  const { id } = req.params;
  const { estaCancelado } = req.body; // Recibimos el estado de cancelación

  try {
    const pedido = await Pedido.findByPk(id);
    if (!pedido) {
      return res.status(404).json({ error: "Pedido no encontrado" });
    }

    // Actualizamos el estado de cancelación si se proporciona
    pedido.estaCancelado = estaCancelado !== undefined ? estaCancelado : pedido.estaCancelado;

    await pedido.save();
    res.status(200).json(pedido);
  } catch (error) {
    res.status(500).json({ error: "Error al actualizar el estado del pedido", detalle: error.message });
  }
};
