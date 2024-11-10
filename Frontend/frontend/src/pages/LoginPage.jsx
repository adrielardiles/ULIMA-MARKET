import { useNavigate } from "react-router-dom";
import "../../node_modules/bootstrap/dist/css/bootstrap.css";
import { useState } from "react";
import LoginFormulario from "../components/LoginForm";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { useAuth } from "../context/AuthContext"; // Importa el contexto de autenticación

const LoginPage = () => {
    const [error, setError] = useState("");
    const { iniciarSesion } = useAuth(); // Usa `iniciarSesion` del contexto
    const navigate = useNavigate();

    const loginHandler = async (username, password) => {
        if (username === "Ulima" && password === "123") {
            setError("");
            iniciarSesion({ nombre: username }); // Establece el usuario autenticado
            navigate("/"); // Redirige al home
        } else {
            setError("Error Login");
        }
    };

    return (
        <>
            <Header />
            <div className="row mt-5 mb-5">
                <div className="col-md-4"></div>
                <div className="col-md-4">
                    <LoginFormulario
                        loginOnClick={loginHandler}
                        modo={"login"}
                    />
                    {error !== "" && (
                        <div className="mt-4 alert alert-danger text-center">
                            Email o Contraseña incorrecta
                        </div>
                    )}
                    {/* Enlace para redirigir a la página de registro */}
                    <div className="text-center mt-3">
                        <a
                            href="/register"
                            className="text-decoration-none text-primary"
                            style={{ fontSize: '16px' }}
                        >
                            ¿Aún no tienes cuenta?
                        </a>
                    </div>
                </div>
                <div className="col-md-4"></div>
            </div>
            <Footer />
        </>
    );
};

export default LoginPage;
