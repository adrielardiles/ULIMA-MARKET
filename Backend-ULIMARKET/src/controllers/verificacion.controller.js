import CodigoVerificacion from "../dao/CodigoVerificacion.js";
import moment from "moment";

// Generar código de verificación
export const generarCodigo = async (req, res) => {
  const { correo } = req.body;

  if (!correo) {
    return res.status(400).json({ error: "Correo electrónico es requerido." });
  }

  try {
    const codigo = Math.floor(1000 + Math.random() * 9000).toString();
    const expiracion = moment().add(15, 'minutes').toDate();

    await CodigoVerificacion.create({ correo, codigo, expiracion });
    res.status(200).json({ message: "Código de verificación generado." });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error al generar el código." });
  }
};

// Verificar código
export const verificarCodigo = async (req, res) => {
  const { correo, codigo } = req.body;

  if (!correo || !codigo) {
    return res.status(400).json({ error: "Correo y código son requeridos." });
  }

  try {
    const codigoVerificacion = await CodigoVerificacion.findOne({ where: { correo, codigo } });

    if (!codigoVerificacion) {
      return res.status(404).json({ error: "Código incorrecto." });
    }

    const now = moment();
    const expiracion = moment(codigoVerificacion.expiracion);

    if (now.isAfter(expiracion)) {
      return res.status(400).json({ error: "El código ha expirado." });
    }

    res.status(200).json({ message: "Código verificado correctamente." });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error al verificar el código." });
  }
};

// Eliminar códigos expirados
export const eliminarCodigosExpirados = async (req, res) => {
  try {
    const deletedCount = await CodigoVerificacion.destroy({
      where: {
        expiracion: { [Sequelize.Op.lt]: moment().toDate() }
      }
    });

    if (deletedCount === 0) {
      return res.status(404).json({ message: "No se encontraron códigos expirados." });
    }

    res.status(200).json({ message: "Códigos expirados eliminados correctamente." });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error al eliminar los códigos expirados." });
  }
};
