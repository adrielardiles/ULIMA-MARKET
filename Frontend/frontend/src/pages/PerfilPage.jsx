import { useState } from "react";
import PerfilContenido from "../components/PerfilContenido";
import Header from "../components/Header";
import Footer from "../components/Footer";

const opcionesMenu = [
    { label: "Perfil", value: "perfil" },
    { label: "Pedidos", value: "pedidos" },
    { label: "Direcciones", value: "direcciones" },
    { label: "Tarjetas", value: "tarjetas" },
    { label: "Autenticación", value: "autenticacion" },
];

const PerfilPage = () => {
    const [opcionSeleccionada, setOpcionSeleccionada] = useState("perfil");

    return <>
        <>
            <Header />
            <div className="container my-5">
                <div className="text-center mb-4">
                    <img
                        src={`${process.env.PUBLIC_URL}/imagenes/AVATAR.jpg`}
                        alt="Avatar"
                        className="rounded-circle mb-2"
                        style={{ width: '100px', height: '100px' }}
                    />
                    <p className="fw-bold">Hola, Cliente!</p>
                </div>


                <div className="d-flex justify-content-center mb-4">
                    <ul className="nav nav-pills">
                        {opcionesMenu.map((opcion) => (
                            <li key={opcion.value} className="nav-item">
                                <button
                                    className={`nav-link btn btn-link ${opcionSeleccionada === opcion.value ? "active" : ""}`}
                                    onClick={() => setOpcionSeleccionada(opcion.value)}
                                    style={{ textDecoration: 'none' }}
                                >
                                    {opcion.label}
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>


                <div className="p-4 border rounded bg-light">
                    <PerfilContenido opcion={opcionSeleccionada} />
                </div>
            </div>
            <Footer />
        </>
    </>
};

export default PerfilPage;
