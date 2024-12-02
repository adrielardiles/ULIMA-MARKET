import Usuario from "../dao/Usuario.js";
import bcrypt from 'bcrypt';


export const crearUsuario = async (req, res) => {
  try {
    const { nombre, usuario, password, isAdmin = false, ...resto } = req.body;

    const hashedPassword = await bcrypt.hash(password, 10);

    const nuevoUsuario = await Usuario.create({
      nombre,
      usuario,
      password: hashedPassword,
      isAdmin, 
      ...resto,
    });

    res.status(201).json({
      mensaje: "Usuario creado con éxito",
      usuario: {
        id: nuevoUsuario.id,
        nombre: nuevoUsuario.nombre,
        usuario: nuevoUsuario.usuario,
        isAdmin: nuevoUsuario.isAdmin,
      },
    });
  } catch (error) {
    console.error("Error al crear el usuario:", error.message);
    res.status(500).json({
      error: "Error al crear el usuario",
      detalle: error.message,
    });
  }
};




export const obtenerUsuarios = async (req, res) => {
  try {
    const usuarios = await Usuario.findAll();
    res.status(200).json(usuarios);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener los usuarios", detalle: error.message });
  }
};


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


export const obtenerUsuarioPorId = async (req, res) => {
  const { id } = req.params;

  try {
    const usuario = await Usuario.findByPk(id, {
      include: [MetodoPago, Direccion, Pedido]  
    });

    if (!usuario) {
      return res.status(404).json({ error: "Usuario no encontrado" });
    }

    res.status(200).json(usuario);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener el usuario", detalle: error.message });
  }
};




export const cambiarContrasenaPorCorreo = async (req, res) => {
  const { email, nuevaContrasena } = req.body;

  try {

    const usuarioExistente = await Usuario.findOne({ where: { email } });
    if (!usuarioExistente) {
      return res.status(404).json({ error: "Usuario no encontrado" });
    }

    const hashedPassword = await bcrypt.hash(nuevaContrasena, 10);

    await Usuario.update(
      { password: hashedPassword },
      { where: { email } }
    );

    res.status(200).json({ message: "Contraseña actualizada correctamente" });
  } catch (error) {
    console.error("Error al cambiar la contraseña:", error.message);
    res.status(500).json({ error: "Error al cambiar la contraseña", detalle: error.message });
  }
};


export const iniciarSesion = async (req, res) => {
  const { email, password } = req.body;

  try {
    const usuarioExistente = await Usuario.findOne({ where: { email } });

    if (!usuarioExistente) {
      return res.status(404).json({ message: "El correo electrónico no está registrado" });
    }

    const isValidPassword = await bcrypt.compare(password, usuarioExistente.password); 
    if (!isValidPassword) {
      return res.status(401).json({ message: "Contraseña incorrecta" });
    }

    res.status(200).json({
      message: "Inicio de sesión exitoso",
      usuario: {
        nombre: usuarioExistente.nombre,
        email: usuarioExistente.email,
        isAdmin: usuarioExistente.isAdmin, 
      },
    });
  } catch (error) {
    res.status(500).json({ error: "Error al iniciar sesión", detalle: error.message });
  }
};

export const verificarCorreo = async (req, res) => {
  const { email } = req.body;

  try {
      const usuarioExistente = await Usuario.findOne({ where: { email } });

      if (!usuarioExistente) {
          return res.status(404).json({ error: "El correo no está registrado." });
      }

      res.status(200).json({ message: "Correo válido." });
  } catch (error) {
      console.error("Error al verificar el correo:", error.message);
      res.status(500).json({ error: "Error al verificar el correo.", detalle: error.message });
  }
};




export const hacerAdmin = async (req, res) => {
  const { email } = req.body;

  try {
      const usuario = await Usuario.findOne({ where: { email } });

      if (!usuario) {
          return res.status(404).json({ error: "Usuario no encontrado." });
      }

      if (usuario.isAdmin) {
          return res.status(400).json({ error: "El usuario ya es administrador." });
      }

      usuario.isAdmin = true;
      await usuario.save();

      res.status(200).json({ message: `El usuario "${usuario.email}" ahora es administrador.` });
  } catch (error) {
      console.error("Error al hacer admin:", error.message);
      res.status(500).json({ error: "Error al hacer administrador.", detalle: error.message });
  }
};
