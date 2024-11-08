import { useState } from "react";
import { useNavigate } from "react-router-dom";
import EntradaDatos from "./EntradaDatos";

const LoginFormulario = (props) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [errorMessage, setErrorMessage] = useState(""); // Nuevo estado para mensajes de error
    const navigate = useNavigate();

    const handleButtonClick = () => {
        if (props.modo === "login") {
            // Lógica de validación para login
            if (username && password) {
                props.loginOnClick(username, password);
            } else {
                setErrorMessage("Por favor ingrese un usuario y una contraseña válidos.");
            }
        } else {
            // Modo registro: redirigir al menú principal
            if (name && username && password) {
                navigate("/"); // Redirigir al menú principal
            } else {
                setErrorMessage("Por favor complete todos los campos.");
            }
        }
    };

    return (
        <>
            <h1 className="text-center mt-5 mb-3">
                {props.modo === "login" ? "Iniciar Sesión" : "Crear nueva cuenta"}
            </h1>
            <form>
                {props.modo !== "login" && (
                    <EntradaDatos
                        key={"input_name"}
                        label="Nombre de usuario:"
                        tipo="entrada"
                        valor={name}
                        setValor={setName}
                    />
                )}
                <EntradaDatos
                    key={"input_username"}
                    label="Correo electrónico: "
                    tipo="entrada"
                    valor={username}
                    setValor={setUsername}
                />
                <EntradaDatos
                    key={"input_password"}
                    label="Contraseña:"
                    tipo="password"
                    valor={password}
                    setValor={setPassword}
                />
                <div className="text-center mt-5 mb-3">
                    <button
                        type="button"
                        className="btn btn-danger"
                        onClick={handleButtonClick}
                    >
                        {props.modo === "login" ? "Acceder" : "Guardar"}
                    </button>
                </div>
                {errorMessage && (
                    <div className="alert alert-danger mt-3 text-center" role="alert">
                        {errorMessage}
                    </div>
                )}
            </form>
            <div className="text-center mt-3">
                {props.modo === "login" ? (
                    <button
                        type="button"
                        className="btn btn-link"
                        onClick={() => navigate("/recuperar-contraseña")}
                    >
                        ¿Recuperar contraseña?
                    </button>
                ) : (
                    <button
                        type="button"
                        className="btn btn-link"
                        onClick={() => navigate("/login")}
                    >
                        ¿Ya tienes una cuenta?
                    </button>
                )}
            </div>
        </>
    );
};

export default LoginFormulario;
