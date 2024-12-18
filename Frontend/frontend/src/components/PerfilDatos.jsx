import React, { useState } from 'react';
import EntradaDatos from './EntradaDatos';

const PerfilDatos = () => {
    const datosClientePorDefecto = {
        nombre: "Adriel",
        apellidoP: "Doe",
        apellidoM: "DoeXD",
        telefono: "98228",
        documento: "12345678",
        genero: "Masculino",
        fechaNacimiento: "1990-01-01",
    };

    const [nombre, setNombre] = useState(datosClientePorDefecto.nombre);
    const [apellidoP, setApellidoP] = useState(datosClientePorDefecto.apellidoP);
    const [apellidoM, setApellidoM] = useState(datosClientePorDefecto.apellidoM);
    const [documento, setDocumento] = useState(datosClientePorDefecto.documento);
    const [genero, setGenero] = useState(datosClientePorDefecto.genero);
    const [fechaNacimiento, setFechaNacimiento] = useState(datosClientePorDefecto.fechaNacimiento);
    const [telefono, setTelefono] = useState(datosClientePorDefecto.telefono);
    const [editMode, setEditMode] = useState(false);

    const handleEditToggle = () => {
        setEditMode(!editMode);
    };

    const handleSave = () => {
        console.log({
            nombre,
            apellidoP,
            apellidoM,
            documento,
            genero,
            fechaNacimiento,
            telefono,
        });
        setEditMode(false);
    };

    return (
        <>
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
                                readOnly={!editMode}
                            />
                        </div>
                        <div className="col-12 col-md-6">
                            <EntradaDatos
                                label="Apellido Paterno"
                                tipo="text"
                                valor={apellidoP}
                                setValor={setApellidoP}
                                placeholder="Ingrese su apellido paterno"
                                id="apellidoP"
                                readOnly={!editMode}
                            />
                        </div>
                    </div>

                    <div className="row mb-3">
                        <div className="col-12 col-md-6">
                            <EntradaDatos
                                label="Apellido Materno"
                                tipo="text"
                                valor={apellidoM}
                                setValor={setApellidoM}
                                placeholder="Ingrese su apellido materno"
                                id="apellidoM"
                                readOnly={!editMode}
                            />
                        </div>
                        <div className="col-12 col-md-6">
                            <EntradaDatos
                                label="Teléfono"
                                tipo="tel"
                                valor={telefono}
                                setValor={setTelefono}
                                placeholder="Ingrese su número de teléfono"
                                id="telefono"
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
        </>
    );
};

export default PerfilDatos;
