import { useState } from "react";
import EntradaDatos from "./EntradaDatos";

const CambiarContrasena = ({ manejarContrasenaCambiada }) => {
    const [nuevaContrasena, setNuevaContrasena] = useState("");
    const [confirmarContrasena, setConfirmarContrasena] = useState("");

    const manejarCambioContrasena = () => {
        if (nuevaContrasena === confirmarContrasena) {
            manejarContrasenaCambiada();
        } else {
            manejarContrasenaCambiada("Las contraseñas no coinciden.");
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
    );
};

export default CambiarContrasena;
