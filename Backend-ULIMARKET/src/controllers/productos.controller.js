import Producto from "../dao/Producto.js";
import Categoria from "../dao/Categoria.js";


export const crearProducto = async (req, res) => {
    const { nombre, descripcion, precio, imagen, stock, categoria_id } = req.body;

    try {
        const categoria = await Categoria.findByPk(categoria_id);
        if (!categoria) {
            return res.status(404).json({ error: "Categoría no encontrada" });
        }

        const producto = await Producto.create({
            nombre,
            descripcion,
            precio,
            imagen,
            stock,
            categoria_id,
        });

        res.status(201).json(producto);
    } catch (error) {
        res.status(500).json({ error: "Error al crear el producto", detalle: error.message });
    }
};



export const obtenerProductos = async (req, res) => {
  try {
    const productos = await Producto.findAll({
      include: Categoria, 
    });
    res.status(200).json(productos);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener los productos", detalle: error.message });
  }
};


export const obtenerProductoPorId = async (req, res) => {
  const { id } = req.params;

  try {
    const producto = await Producto.findByPk(id, {
      include: Categoria, 
    });

    if (!producto) {
      return res.status(404).json({ error: "Producto no encontrado" });
    }

    res.status(200).json(producto);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener el producto", detalle: error.message });
  }
};


export const actualizarProducto = async (req, res) => {
  const { id } = req.params;
  const { nombre, descripcion, precio, imagen, stock, categoria_id } = req.body;

  try {
    const producto = await Producto.findByPk(id);
    if (!producto) {
      return res.status(404).json({ error: "Producto no encontrado" });
    }

    if (categoria_id) {
      const categoria = await Categoria.findByPk(categoria_id);
      if (!categoria) {
        return res.status(404).json({ error: "Categoría no encontrada" });
      }
    }

    await Producto.update(
      { nombre, descripcion, precio, imagen, stock, categoria_id },
      { where: { id } }
    );

    const productoActualizado = await Producto.findByPk(id);
    res.status(200).json(productoActualizado);
  } catch (error) {
    res.status(500).json({ error: "Error al actualizar el producto", detalle: error.message });
  }
};


export const eliminarProducto = async (req, res) => {
  const { id } = req.params;

  try {
    const producto = await Producto.findByPk(id);
    if (!producto) {
      return res.status(404).json({ error: "Producto no encontrado" });
    }

    await producto.destroy();
    res.status(200).json({ message: "Producto eliminado correctamente" });
  } catch (error) {
    res.status(500).json({ error: "Error al eliminar el producto", detalle: error.message });
  }
};



export const obtenerProductosPorCategoria = async (req, res) => {
  const { categoria_id } = req.params;

  try {

    const categoria = await Categoria.findByPk(categoria_id);
    if (!categoria) {
      return res.status(404).json({ error: "Categoría no encontrada" });
    }

 
    const productos = await Producto.findAll({
      where: { categoria_id },
      include: Categoria,
    });

    res.status(200).json(productos);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener los productos de la categoría", detalle: error.message });
  }
};
