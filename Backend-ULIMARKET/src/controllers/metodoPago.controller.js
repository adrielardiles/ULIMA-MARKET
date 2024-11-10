import MetodoPago from "../dao/MetodoPago.js";
import Usuario from "../dao/Usuario.js";

// Crear método de pago
export const crearMetodoPago = async (req, res) => {
  try {
    const { usuario_id, pais_id, departamento_id, provincia_id, distrito_id } = req.body;

    // Validar si el usuario existe
    const usuario = await Usuario.findByPk(usuario_id);
    if (!usuario) {
      return res.status(404).json({ message: "Usuario no encontrado" });
    }

    // Crear el método de pago
    const metodoPago = await MetodoPago.create(req.body);
    res.status(201).json({ message: "Método de pago creado correctamente", metodoPago });
  } catch (error) {
    res.status(500).json({ message: "Error al crear el método de pago", error });
  }
};

// Obtener métodos de pago de un usuario
export const obtenerMetodosPago = async (req, res) => {
  try {
    const { usuario_id } = req.params;
    const metodosPago = await MetodoPago.findAll({ where: { usuario_id } });
    res.status(200).json(metodosPago);
  } catch (error) {
    res.status(500).json({ message: "Error al obtener los métodos de pago", error });
  }
};

// Obtener un método de pago específico por ID
export const obtenerMetodoPagoPorId = async (req, res) => {
  try {
    const { id } = req.params;
    const metodoPago = await MetodoPago.findByPk(id);
    if (!metodoPago) {
      return res.status(404).json({ message: "Método de pago no encontrado" });
    }
    res.status(200).json(metodoPago);
  } catch (error) {
    res.status(500).json({ message: "Error al obtener el método de pago", error });
  }
};

// Actualizar método de pago
export const actualizarMetodoPago = async (req, res) => {
  const { id } = req.params;
  const { Numero, Propietario, CVE, valido_hasta, pais_id, departamento_id, provincia_id, distrito_id } = req.body;

  try {
    const metodoPago = await MetodoPago.findByPk(id);
    if (!metodoPago) {
      return res.status(404).json({ error: "Método de pago no encontrado" });
    }

    // Actualizar el método de pago
    await metodoPago.update({
      Numero: Numero ?? metodoPago.Numero,
      Propietario: Propietario ?? metodoPago.Propietario,
      CVE: CVE ?? metodoPago.CVE,
      valido_hasta: valido_hasta ?? metodoPago.valido_hasta,
      pais_id: pais_id ?? metodoPago.pais_id,
      departamento_id: departamento_id ?? metodoPago.departamento_id,
      provincia_id: provincia_id ?? metodoPago.provincia_id,
      distrito_id: distrito_id ?? metodoPago.distrito_id
    });

    res.status(200).json({ message: "Método de pago actualizado correctamente", metodoPago });
  } catch (error) {
    res.status(500).json({ message: "Error al actualizar el método de pago", error });
  }
};

// Eliminar un método de pago
export const eliminarMetodoPago = async (req, res) => {
  const { id } = req.params;

  try {
    const metodoPago = await MetodoPago.findByPk(id);
    if (!metodoPago) {
      return res.status(404).json({ error: "Método de pago no encontrado" });
    }

    // Eliminar el método de pago
    await metodoPago.destroy();
    res.status(200).json({ message: "Método de pago eliminado correctamente" });
  } catch (error) {
    res.status(500).json({ message: "Error al eliminar el método de pago", error });
  }
};
