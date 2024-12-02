import  Promocion  from "../dao/Promociones.js";
import Categoria  from "../dao/Categoria.js";


export const crearPromocion = async (req, res) => {
  const { imagen, categoria_id } = req.body;

  try {

    const categoria = await Categoria.findByPk(categoria_id);
    if (!categoria) {
      return res.status(404).json({ error: "Categoría no encontrada" });
    }

    const promocion = await Promocion.create({
      imagen,
      categoria_id,
    });

    res.status(201).json(promocion);
  } catch (error) {
    res.status(500).json({ error: "Error al crear la promoción", detalle: error.message });
  }
};


export const obtenerPromociones = async (req, res) => {
  try {
    const promociones = await Promocion.findAll({
      include: Categoria,
    });
    res.status(200).json(promociones);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener las promociones", detalle: error.message });
  }
};


export const obtenerPromocionPorId = async (req, res) => {
  const { id } = req.params;

  try {
    const promocion = await Promocion.findByPk(id, {
      include: Categoria,
    });

    if (!promocion) {
      return res.status(404).json({ error: "Promoción no encontrada" });
    }

    res.status(200).json(promocion);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener la promoción", detalle: error.message });
  }
};


export const actualizarPromocion = async (req, res) => {
  const { id } = req.params;
  const { imagen, categoria_id } = req.body;

  try {
    const promocion = await Promocion.findByPk(id);
    if (!promocion) {
      return res.status(404).json({ error: "Promoción no encontrada" });
    }

    if (categoria_id) {
      const categoria = await Categoria.findByPk(categoria_id);
      if (!categoria) {
        return res.status(404).json({ error: "Categoría no encontrada" });
      }
    }

    promocion.imagen = imagen !== undefined ? imagen : promocion.imagen;
    promocion.categoria_id = categoria_id !== undefined ? categoria_id : promocion.categoria_id;

    await promocion.save();
    res.status(200).json(promocion);
  } catch (error) {
    res.status(500).json({ error: "Error al actualizar la promoción", detalle: error.message });
  }
};


export const eliminarPromocion = async (req, res) => {
  const { id } = req.params;

  try {
    const promocion = await Promocion.findByPk(id);
    if (!promocion) {
      return res.status(404).json({ error: "Promoción no encontrada" });
    }

    await promocion.destroy();
    res.status(200).json({ message: "Promoción eliminada correctamente" });
  } catch (error) {
    res.status(500).json({ error: "Error al eliminar la promoción", detalle: error.message });
  }
};


export const obtenerPromocionesPorCategoria = async (req, res) => {
  const { categoria_id } = req.params;

  try {

    const categoria = await Categoria.findByPk(categoria_id);
    if (!categoria) {
      return res.status(404).json({ error: "Categoría no encontrada" });
    }


    const promociones = await Promocion.findAll({
      where: { categoria_id },
      include: Categoria,
    });

    res.status(200).json(promociones);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener las promociones de la categoría", detalle: error.message });
  }
};
