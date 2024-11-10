import Direccion from "../dao/Direccion.js";

// Crear dirección
export const crearDireccion = async (req, res) => {
  try {
    const { pais_id, departamento_id, provincia_id, distrito_id, calle, numero, informacionAdicional, usuario_id } = req.body;
    const direccion = await Direccion.create({
      pais_id,
      departamento_id,
      provincia_id,
      distrito_id,
      calle,
      numero,
      informacionAdicional,
      usuario_id
    });
    res.status(201).json(direccion);
  } catch (error) {
    res.status(500).json({ message: "Error al crear la dirección", error });
  }
};

// Obtener todas las direcciones de un usuario
export const obtenerDirecciones = async (req, res) => {
  try {
    const { usuario_id } = req.params;
    const direcciones = await Direccion.findAll({ where: { usuario_id } });
    res.status(200).json(direcciones);
  } catch (error) {
    res.status(500).json({ message: "Error al obtener direcciones", error });
  }
};

// Obtener una dirección específica por ID
export const obtenerDireccionPorId = async (req, res) => {
  try {
    const { id } = req.params;
    const direccion = await Direccion.findByPk(id);
    if (!direccion) {
      return res.status(404).json({ message: "Dirección no encontrada" });
    }
    res.status(200).json(direccion);
  } catch (error) {
    res.status(500).json({ message: "Error al obtener la dirección", error });
  }
};

// Actualizar una dirección
export const actualizarDireccion = async (req, res) => {
  try {
    const { id } = req.params;
    const { pais_id, departamento_id, provincia_id, distrito_id, calle, numero, informacionAdicional, usuario_id } = req.body;
    const direccion = await Direccion.findByPk(id);
    if (!direccion) {
      return res.status(404).json({ message: "Dirección no encontrada" });
    }

    await direccion.update({
      pais_id,
      departamento_id,
      provincia_id,
      distrito_id,
      calle,
      numero,
      informacionAdicional,
      usuario_id
    });

    res.status(200).json(direccion);
  } catch (error) {
    res.status(500).json({ message: "Error al actualizar la dirección", error });
  }
};

// Eliminar una dirección
export const eliminarDireccion = async (req, res) => {
  try {
    const { id } = req.params;
    const direccion = await Direccion.findByPk(id);
    if (!direccion) {
      return res.status(404).json({ message: "Dirección no encontrada" });
    }
    await direccion.destroy();
    res.status(200).json({ message: "Dirección eliminada correctamente" });
  } catch (error) {
    res.status(500).json({ message: "Error al eliminar la dirección", error });
  }
};
