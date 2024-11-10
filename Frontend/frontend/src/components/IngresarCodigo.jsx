import { useState } from "react";
import EntradaDatos from "./EntradaDatos";

const IngresarCodigo = ({ manejarCodigoIngresado, reenviarCodigo }) => {
    const [email, setEmail] = useState("");
    const [codigo, setCodigo] = useState("");
    const [correoConfirmado, setCorreoConfirmado] = useState(false);
    const [codigoValido, setCodigoValido] = useState(null);
    const codigoCorrecto = "1234"; 

    const handleEnviarCodigo = () => {
        if (email) {
            setCorreoConfirmado(true);
            reenviarCodigo(); 
        }
    };

    const handleVerificarCodigo = () => {
        if (codigo === codigoCorrecto) {
            manejarCodigoIngresado(codigo);
            setCodigoValido(true);
        } else {
            setCodigoValido(false);
        }
    };

    return <>
        <div>
            <h1 className="text-center mb-4">Recuperar Contraseña</h1>
            {!correoConfirmado ? (
                <>
                    <EntradaDatos
                        key={"input_email"}
                        label="Correo Electrónico:"
                        tipo="entrada"
                        valor={email}
                        setValor={setEmail}
                    />
                    <div className="text-center mt-4">
                        <button
                            type="button"
                            className="btn btn-primary"
                            onClick={handleEnviarCodigo}
                            disabled={!email}
                        >
                            Enviar Código
                        </button>
                    </div>
                </>
            ) : (
                <>
                    <p className="text-center">Se ha enviado un código a tu correo electrónico.</p>
                    <EntradaDatos
                        key={"input_codigo"}
                        label="Ingrese el código:"
                        tipo="entrada"
                        valor={codigo}
                        setValor={setCodigo}
                    />
                    <div className="text-center mt-4">
                        <button
                            type="button"
                            className="btn btn-primary"
                            onClick={handleVerificarCodigo}
                            disabled={!codigo}
                        >
                            Continuar
                        </button>
                        {codigoValido === false && (
                            <div className="text-center mt-3">
                                <p className="text-danger">El código ingresado es incorrecto.</p>
                                <button
                                    type="button"
                                    className="btn btn-secondary"
                                    onClick={reenviarCodigo}
                                >
                                    Reenviar Código
                                </button>
                            </div>
                        )}
                    </div>
                </>
            )}
        </div>
    </>
};

export default IngresarCodigo;
