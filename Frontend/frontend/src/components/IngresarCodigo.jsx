import { useState } from "react";
import emailjs from "@emailjs/browser";
import EntradaDatos from "./EntradaDatos";

const IngresarCodigo = ({ manejarCodigoIngresado, reenviarCodigo, manejarCodigoGenerado }) => {
    const [email, setEmail] = useState("");
    const [codigo, setCodigo] = useState("");
    const [correoConfirmado, setCorreoConfirmado] = useState(false);
    const [mensaje, setMensaje] = useState("");
    const [mensajeTipo, setMensajeTipo] = useState(""); // success o error

    const handleEnviarCodigo = async () => {
        if (email) {
            const esCorreoValido = (correo) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(correo);
            if (!esCorreoValido(email)) {
                setMensaje("Por favor, ingresa un correo electrónico válido.");
                setMensajeTipo("error");
                return;
            }

            try {
                const response = await fetch("http://localhost:3000/usuarios/verificar-correo", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ email }),
                });

                if (!response.ok) {
                    const errorData = await response.json();
                    setMensaje(errorData.error || "El correo no está registrado.");
                    setMensajeTipo("error");
                    return;
                }

                const codigoGenerado = Math.floor(1000 + Math.random() * 9000).toString();
                manejarCodigoGenerado(codigoGenerado, email);

                const serviceId = "service_ci1bc2k";
                const templateId = "template_9rlcvio";
                const publicKey = "3_MazLoJI4A5cKvcr";

                const templateParams = {
                    email: email,
                    message: `Tu código de verificación es: ${codigoGenerado}. Este código es válido por 10 minutos.`,
                };

                const emailResponse = await emailjs.send(
                    serviceId,
                    templateId,
                    templateParams,
                    publicKey
                );

                console.log("Correo enviado exitosamente:", emailResponse);
                setMensaje(`Te hemos enviado un código al correo: ${email}`);
                setMensajeTipo("success");
                setCorreoConfirmado(true);
                reenviarCodigo();
            } catch (error) {
                console.error("Error al verificar el correo o enviar el código:", error);
                setMensaje("Hubo un problema al verificar el correo o enviar el código.");
                setMensajeTipo("error");
            }
        } else {
            setMensaje("Por favor, ingresa un correo electrónico válido.");
            setMensajeTipo("error");
        }
    };

    const handleVerificarCodigo = () => {
        manejarCodigoIngresado(codigo);
    };

    return (
        <div>
            <h1 className="text-center mb-4">Recuperar Contraseña</h1>

            {mensaje && (
                <p className={`text-center ${mensajeTipo === "error" ? "text-danger" : "text-success"}`}>
                    {mensaje}
                </p>
            )}

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
                    <p className="text-center">
                        Se ha enviado un código a tu correo: <strong>{email}</strong>
                    </p>
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
                    </div>
                </>
            )}
        </div>
    );
};

export default IngresarCodigo;
