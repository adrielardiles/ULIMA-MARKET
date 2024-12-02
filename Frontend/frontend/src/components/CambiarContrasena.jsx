import { useState } from "react";
import EntradaDatos from "./EntradaDatos";
const CambiarContrasena = ({ manejarContrasenaCambiada, email }) => {
    const [nuevaContrasena, setNuevaContrasena] = useState("");
    const [confirmarContrasena, setConfirmarContrasena] = useState("");
    const [mensajeError, setMensajeError] = useState("");

    const manejarCambioContrasena = async () => {
        if (nuevaContrasena.length < 6) {
            setMensajeError("La contraseña debe tener al menos 6 caracteres.");
            return;
        }
        if (nuevaContrasena !== confirmarContrasena) {
            setMensajeError("Las contraseñas no coinciden.");
            return;
        }

        try {
            console.log("El email es" + email)
            const response = await fetch("http://localhost:3000/usuarios/cambiar-contrasena", {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ email, nuevaContrasena }),
            });

            if (response.ok) {
                manejarContrasenaCambiada();
            } else {
                const errorData = await response.json();
                setMensajeError(errorData.error || "Error al cambiar la contraseña.");
            }
        } catch (error) {
            console.error("Error al cambiar la contraseña:", error);
            setMensajeError("Error de red al intentar cambiar la contraseña.");
        }
    };

    return (
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
                >
                    Cambiar Contraseña
                </button>
            </div>
        </div>
    );
};

export default CambiarContrasena;
