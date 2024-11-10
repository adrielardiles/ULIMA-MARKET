import Usuario from "../dao/Usuario.js";

// Crear un nuevo usuario
export const crearUsuario = async (req, res) => {
  try {
    const { nombre, usuario, password, apellidoPaterno, apellidoMaterno, telefono, isAdmin, fechaNacimiento, genero } = req.body;
    const edad = calcularEdad(fechaNacimiento);

    const nuevoUsuario = await Usuario.create({
      nombre,
      usuario,
      password,
      apellidoPaterno,
      apellidoMaterno,
      telefono,
      isAdmin,
      fechaNacimiento,
      genero,
      edad
    });

    res.status(201).json(nuevoUsuario);
  } catch (error) {
    res.status(500).json({ error: "Error al crear el usuario", detalle: error.message });
  }
};

// Función para calcular la edad
const calcularEdad = (fechaNacimiento) => {
  const today = new Date();
  const birthDate = new Date(fechaNacimiento);
  let age = today.getFullYear() - birthDate.getFullYear();
  const month = today.getMonth();
  if (month < birthDate.getMonth() || (month === birthDate.getMonth() && today.getDate() < birthDate.getDate())) {
    age--;
  }
  return age;
};

// Obtener todos los usuarios
export const obtenerUsuarios = async (req, res) => {
  try {
    const usuarios = await Usuario.findAll();
    res.status(200).json(usuarios);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener los usuarios", detalle: error.message });
  }
};

// Obtener un usuario específico por ID
export const obtenerUsuario = async (req, res) => {
  const { id } = req.params;

  try {
    const usuario = await Usuario.findByPk(id);
    if (!usuario) {
      return res.status(404).json({ error: "Usuario no encontrado" });
    }
    res.status(200).json(usuario);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener el usuario", detalle: error.message });
  }
};

// Actualizar un usuario
export const actualizarUsuario = async (req, res) => {
  const { id } = req.params;
  const { nombre, usuario, password, apellidoPaterno, apellidoMaterno, telefono, isAdmin } = req.body;

  try {
    const usuarioExistente = await Usuario.findByPk(id);
    if (!usuarioExistente) {
      return res.status(404).json({ error: "Usuario no encontrado" });
    }

    await Usuario.update(
      { nombre, usuario, password, apellidoPaterno, apellidoMaterno, telefono, isAdmin },
      { where: { id } }
    );

    const usuarioActualizado = await Usuario.findByPk(id);
    res.status(200).json(usuarioActualizado);
  } catch (error) {
    res.status(500).json({ error: "Error al actualizar el usuario", detalle: error.message });
  }
};

// Eliminar un usuario
export const eliminarUsuario = async (req, res) => {
  const { id } = req.params;

  try {
    const usuario = await Usuario.findByPk(id);
    if (!usuario) {
      return res.status(404).json({ error: "Usuario no encontrado" });
    }

    await usuario.destroy();
    res.status(200).json({ message: "Usuario eliminado correctamente" });
  } catch (error) {
    res.status(500).json({ error: "Error al eliminar el usuario", detalle: error.message });
  }
};

// Obtener un usuario por ID
export const obtenerUsuarioPorId = async (req, res) => {
  const { id } = req.params;

  try {
    const usuario = await Usuario.findByPk(id, {
      include: [MetodoPago, Direccion, Pedido]  // Relacionamos con los pagos, direcciones y pedidos del usuario
    });

    if (!usuario) {
      return res.status(404).json({ error: "Usuario no encontrado" });
    }

    res.status(200).json(usuario);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener el usuario", detalle: error.message });
  }
};

// Iniciar sesión
export const iniciarSesion = async (req, res) => {
  const { usuario, password } = req.body;

  try {
    // Buscar el usuario con las credenciales proporcionadas
    const usuarioExistente = await Usuario.findOne({
      where: { usuario, password }
    });

    if (!usuarioExistente) {
      return res.status(400).json({ message: "Credenciales incorrectas" });
    }

    // Retornamos el usuario si las credenciales son correctas
    res.status(200).json({ message: "Inicio de sesión exitoso", usuario: usuarioExistente });
  } catch (error) {
    res.status(500).json({ error: "Error al iniciar sesión", detalle: error.message });
  }
};
