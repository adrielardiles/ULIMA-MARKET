import MetodoPago from "../dao/MetodoPago.js";
import Usuario from "../dao/Usuario.js";


export const crearMetodoPago = async (req, res) => {
  try {
    const { usuario_id, pais_id, departamento_id, provincia_id, distrito_id } = req.body;


    const usuario = await Usuario.findByPk(usuario_id);
    if (!usuario) {
      return res.status(404).json({ message: "Usuario no encontrado" });
    }


    const metodoPago = await MetodoPago.create(req.body);
    res.status(201).json({ message: "Método de pago creado correctamente", metodoPago });
  } catch (error) {
    res.status(500).json({ message: "Error al crear el método de pago", error });
  }
};


export const obtenerMetodosPago = async (req, res) => {
  try {
    const { usuario_id } = req.params;
    const metodosPago = await MetodoPago.findAll({ where: { usuario_id } });
    res.status(200).json(metodosPago);
  } catch (error) {
    res.status(500).json({ message: "Error al obtener los métodos de pago", error });
  }
};


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


export const actualizarMetodoPago = async (req, res) => {
  const { id } = req.params;
  const { Numero, Propietario, CVE, valido_hasta, pais_id, departamento_id, provincia_id, distrito_id } = req.body;

  try {
    const metodoPago = await MetodoPago.findByPk(id);
    if (!metodoPago) {
      return res.status(404).json({ error: "Método de pago no encontrado" });
    }


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


export const eliminarMetodoPago = async (req, res) => {
  const { id } = req.params;

  try {
    const metodoPago = await MetodoPago.findByPk(id);
    if (!metodoPago) {
      return res.status(404).json({ error: "Método de pago no encontrado" });
    }


    await metodoPago.destroy();
    res.status(200).json({ message: "Método de pago eliminado correctamente" });
  } catch (error) {
    res.status(500).json({ message: "Error al eliminar el método de pago", error });
  }
};
