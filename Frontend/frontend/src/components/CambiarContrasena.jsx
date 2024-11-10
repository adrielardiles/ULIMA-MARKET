import { useState } from "react";
import EntradaDatos from "./EntradaDatos";

const CambiarContrasena = ({ manejarContrasenaCambiada }) => {
    const [nuevaContrasena, setNuevaContrasena] = useState("");
    const [confirmarContrasena, setConfirmarContrasena] = useState("");
    const [mensajeError, setMensajeError] = useState("");

    const manejarCambioContrasena = () => {
        if (nuevaContrasena.length < 6) {
            setMensajeError("La contraseña debe tener al menos 6 caracteres.");
            return;
        }
        if (nuevaContrasena === confirmarContrasena) {
            manejarContrasenaCambiada();
            setNuevaContrasena("");
            setConfirmarContrasena("");
            setMensajeError(""); // Limpia cualquier mensaje de error existente
        } else {
            setMensajeError("Las contraseñas no coinciden.");
        }
    };

    return <>
        <div>
            <h1 className="text-center mb-4">Cambiar Contraseña</h1>
            <EntradaDatos
                key={"input_new_password"}
                label="Nueva Contraseña:"
                tipo="password"
                valor={nuevaContrasena}
                setValor={setNuevaContrasena}
            />
            <EntradaDatos
                key={"input_confirm_password"}
                label="Confirmar Nueva Contraseña:"
                tipo="password"
                valor={confirmarContrasena}
                setValor={setConfirmarContrasena}
            />
            {mensajeError && (
                <p className="text-danger text-center mt-3">{mensajeError}</p>
            )}
            <div className="text-center mt-4">
                <button
                    type="button"
                    className="btn btn-success"
                    onClick={manejarCambioContrasena}
                    disabled={!nuevaContrasena || !confirmarContrasena}
                >
                    Continuar
                </button>
            </div>
        </div>
    </>
};

export default CambiarContrasena;
