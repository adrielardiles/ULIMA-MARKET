import React, { useState } from 'react';
import EntradaDatos from './EntradaDatos';

const PerfilDatos = () => {
    // Datos simulados del cliente (se usarían estos datos como si vinieran del backend)
    const datosClientePorDefecto = {
        nombre: "Adriel",
        apellido: "Doe",
        documento: "12345678",
        genero: "Masculino",
        fechaNacimiento: "1990-01-01",
        telefono: "987654321",
    };

    // Estados para manejar los datos
    const [nombre, setNombre] = useState(datosClientePorDefecto.nombre);
    const [apellido, setApellido] = useState(datosClientePorDefecto.apellido);
    const [documento, setDocumento] = useState(datosClientePorDefecto.documento);
    const [genero, setGenero] = useState(datosClientePorDefecto.genero);
    const [fechaNacimiento, setFechaNacimiento] = useState(datosClientePorDefecto.fechaNacimiento);
    const [telefono, setTelefono] = useState(datosClientePorDefecto.telefono);
    const [editMode, setEditMode] = useState(false); // Estado para controlar el modo de edición

    const handleEditToggle = () => {
        setEditMode(!editMode); // Cambiar entre modo de edición y modo de visualización
    };

    const handleSave = () => {
        // Lógica para guardar los cambios (ej. enviar datos actualizados al backend)
        // Aquí puedes implementar la lógica para enviar los datos actualizados cuando integres el backend
        console.log({
            nombre,
            apellido,
            documento,
            genero,
            fechaNacimiento,
            telefono
        });
        setEditMode(false); // Desactivar el modo de edición después de guardar
    };

    return (
        <div className="container border rounded p-4 bg-light">
            <form>
                <div className="row mb-3">
                    <div className="col-12 col-md-6">
                        <EntradaDatos
                            label="Nombre"
                            tipo="text"
                            valor={nombre}
                            setValor={setNombre}
                            placeholder="Ingrese su nombre"
                            id="nombre"
                            readOnly={!editMode} // Deshabilitar edición si no está en modo de edición
                        />
                    </div>
                    <div className="col-12 col-md-6">
                        <EntradaDatos
                            label="Apellido"
                            tipo="text"
                            valor={apellido}
                            setValor={setApellido}
                            placeholder="Ingrese su apellido"
                            id="apellido"
                            readOnly={!editMode}
                        />
                    </div>
                </div>
                <div className="row mb-3">
                    <div className="col-12 col-md-6">
                        <EntradaDatos
                            label="Documento de Identidad"
                            tipo="text"
                            valor={documento}
                            setValor={setDocumento}
                            placeholder="Ingrese su documento"
                            id="documento"
                            readOnly={!editMode}
                        />
                    </div>
                    <div className="col-12 col-md-6">
                        <EntradaDatos
                            label="Género"
                            tipo="text"
                            valor={genero}
                            setValor={setGenero}
                            placeholder="Ingrese su género"
                            id="genero"
                            readOnly={!editMode}
                        />
                    </div>
                </div>
                <div className="row mb-3">
                    <div className="col-12 col-md-6">
                        <EntradaDatos
                            label="Fecha de Nacimiento"
                            tipo="date"
                            valor={fechaNacimiento}
                            setValor={setFechaNacimiento}
                            id="fechaNacimiento"
                            readOnly={!editMode}
                        />
                    </div>
                    <div className="col-12 col-md-6">
                        <EntradaDatos
                            label="Teléfono"
                            tipo="tel"
                            valor={telefono}
                            setValor={setTelefono}
                            placeholder="Ingrese su teléfono"
                            id="telefono"
                            readOnly={!editMode}
                        />
                    </div>
                </div>
                <div className="text-center">
                    {!editMode ? (
                        <button type="button" className="btn btn-outline-primary" onClick={handleEditToggle}>
                            Editar
                        </button>
                    ) : (
                        <button type="button" className="btn btn-outline-success" onClick={handleSave}>
                            Guardar
                        </button>
                    )}
                </div>
            </form>
        </div>
    );
};

export default PerfilDatos;
