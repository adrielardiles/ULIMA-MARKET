import Categoria from "../dao/Categoria.js";


export const obtenerCategorias = async (req, res) => {
  try {
    const categorias = await Categoria.findAll();
    res.status(200).json(categorias);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener las categorías' });
  }
};


export const obtenerCategoriaPorId = async (req, res) => {
  const { id } = req.params;
  try {
    const categoria = await Categoria.findByPk(id);
    if (!categoria) {
      return res.status(404).json({ error: 'Categoría no encontrada' });
    }
    res.status(200).json(categoria);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener la categoría' });
  }
};


export const crearCategoria = async (req, res) => {
  const { nombre } = req.body;

  try {
      const categoria = await Categoria.create({ nombre });
      res.status(201).json(categoria);
  } catch (error) {
      res.status(500).json({ error: "Error al crear la categoría", detalle: error.message });
  }
};


export const actualizarCategoria = async (req, res) => {
  const { id } = req.params;
  const { nombre } = req.body;

  try {
    const [filasActualizadas] = await Categoria.update(
      { nombre },
      { where: { id } }
    );

    if (filasActualizadas === 0) {
      return res.status(404).json({ error: 'Categoría no encontrada' });
    }

    const categoriaActualizada = await Categoria.findByPk(id);
    res.status(200).json(categoriaActualizada);
  } catch (error) {
    res.status(500).json({ error: 'Error al actualizar la categoría' });
  }
};


export const eliminarCategoria = async (req, res) => {
  const { id } = req.params;
  try {
    const categoria = await Categoria.findByPk(id);
    if (!categoria) {
      return res.status(404).json({ error: 'Categoría no encontrada' });
    }
    await categoria.destroy();
    res.status(200).json({ message: 'Categoría eliminada correctamente' });
  } catch (error) {
    res.status(500).json({ error: 'Error al eliminar la categoría' });
  }
};
