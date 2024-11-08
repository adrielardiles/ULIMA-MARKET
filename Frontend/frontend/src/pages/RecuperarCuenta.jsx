import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { Modal, Button } from "react-bootstrap";
import IngresarCodigo from "../components/IngresarCodigo";
import CambiarContrasena from "../components/CambiarContrasena";

const RecuperarCuenta = () => {
    const [etapa, setEtapa] = useState("ingresarCodigo");
    const [codigoCorrecto, setCodigoCorrecto] = useState("1234"); // Código simulado
    const [codigoIngresado, setCodigoIngresado] = useState("");
    const [mostrarModal, setMostrarModal] = useState(false);
    const [mensajeModal, setMensajeModal] = useState("");
    const navigate = useNavigate();

    const manejarCodigoIngresado = (codigo) => {
        setCodigoIngresado(codigo);
        if (codigo === codigoCorrecto) {
            setEtapa("cambiarContrasena");
        } else {
            setMensajeModal("El código ingresado es incorrecto.");
            setMostrarModal(true);
        }
    };

    const manejarContrasenaCambiada = () => {
        setMensajeModal("Contraseña cambiada con éxito.");
        setMostrarModal(true);
        setTimeout(() => {
            navigate("/");
        }, 1000); // Navegar al menú principal después de un breve retardo
    };

    return (
        <div className="container mt-5">
            {etapa === "ingresarCodigo" ? (
                <IngresarCodigo
                    manejarCodigoIngresado={manejarCodigoIngresado}
                    reenviarCodigo={() => {
                        setMensajeModal("Código reenviado al correo electrónico proporcionado.");
                        setMostrarModal(true);
                    }}
                />
            ) : (
                <CambiarContrasena manejarContrasenaCambiada={manejarContrasenaCambiada} />
            )}

            {/* Modal de Bootstrap */}
            <Modal show={mostrarModal} onHide={() => setMostrarModal(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Mensaje</Modal.Title>
                </Modal.Header>
                <Modal.Body>{mensajeModal}</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => setMostrarModal(false)}>
                        Cerrar
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
};

export default RecuperarCuenta;
