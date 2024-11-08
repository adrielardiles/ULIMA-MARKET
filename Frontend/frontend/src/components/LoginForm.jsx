import { useState } from "react";
import { useNavigate } from "react-router-dom";
import EntradaDatos from "./EntradaDatos";

const LoginFormulario = (props) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate(); // Hook para la navegación

    return (
        <>
            <h1 className="text-center mt-5 mb-3">
                {props.modo === "login" ? "Iniciar Sesión" : "Crear nueva cuenta"}
            </h1>
            <form>
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
                        onClick={() => {
                            props.loginOnClick(username, password);
                        }}
                    >
                        {props.modo === "login" ? "Acceder" : "Guardar"}
                    </button>
                </div>
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
