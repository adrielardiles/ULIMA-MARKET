
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import EntradaDatos from "./EntradaDatos";

const LoginFormulario = (props) => {
    const [password, setPassword] = useState("");
    const [correo, setCorreo] = useState("");
    const [nombre, setNombre] = useState("");
    const [paterno, setPaterno] = useState("");
    const [materno, setMaterno] = useState("");
    const [genero, setGenero] = useState("");
    
    const [confPassword, setconfPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState(""); 

    const navigate = useNavigate();

    const handleButtonClick = () => {
        if (props.modo === "login") {
            if (correo && password) {
                props.actionOnClick(correo, password);
            } else {
                setErrorMessage("Por favor ingrese un usuario y una contraseña válidos.");
            }
        } else {
            if (correo && nombre && password && confPassword && paterno && materno && genero) {
                if(confPassword === password){
                    props.actionOnClick(nombre, correo, paterno, materno, genero, password)
                    navigate("/");     
                }else{
                    setErrorMessage("Las contraseñas no coinciden")
                }
            } else {
                setErrorMessage("Por favor complete todos los campos.");
            }
        }
    };

    return <>
        <>
            <h1 className="text-center mt-5 mb-3">
                {props.modo === "login" ? "Iniciar Sesión" : "Crear nueva cuenta"}
            </h1>
            <form>
                <EntradaDatos
                    key={"input_correo"}
                    label="Correo electrónico: "
                    tipo="email"
                    valor={correo}
                    setValor={setCorreo}
                    placeholder={"Ingresa tu correo electrónico"}
                />

                {props.modo !== "login" && (
                    <EntradaDatos
                        key={"nombre"}
                        label="Nombre completo:"
                        tipo="text"
                        valor={nombre}
                        setValor={setNombre}
                        placeholder={"Ingresa tu nombre completo"}
                    />
                )}


                {props.modo !== "login" && (
                    <EntradaDatos
                        key={"apellido_paterno"}
                        label="Apellido paterno:"
                        tipo="text"
                        valor={paterno}
                        setValor={setPaterno}
                        placeholder={"Ingresa tu apellido paterno"}
                    />
                )}


                {props.modo !== "login" && (
                    <EntradaDatos
                        key={"apellido_materno"}
                        label="Apellido materno:"
                        tipo="text"
                        valor={materno}
                        setValor={setMaterno}
                        placeholder={"Ingresa tu apellido materno"}
                    />
                )}


                {props.modo !== "login" && (
                    <div className="mb-3">
                        <label htmlFor="genero" className="form-label">
                            Introduce tu género:
                        </label>
                        <select
                            id="genero"
                            className="form-select" // Clase Bootstrap para estilizar selects
                            value={genero}
                            onChange={(e) => setGenero(e.target.value)}
                        >
                            <option value="" disabled>
                                Selecciona una opción
                            </option>
                            <option value="Masculino">Masculino</option>
                            <option value="Femenino">Femenino</option>
                            <option value="Otro">Otro</option>
                        </select>
                    </div>
                )}

                <EntradaDatos
                    key={"input_password"}
                    label="Contraseña:"
                    tipo="password"
                    valor={password}
                    setValor={setPassword}
                    placeholder={"Ingresa tu contraseña"}
                />

                {props.modo !== "login" && (
                    <EntradaDatos
                        key={"confirmar_password"}
                        label="Confirmar contraseña:"
                        tipo="password"
                        valor={confPassword}
                        setValor={setconfPassword}
                        placeholder={"Ingresa tu contraseña nuevamente"}
                    />
                )}


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
    </>
};

export default LoginFormulario;
