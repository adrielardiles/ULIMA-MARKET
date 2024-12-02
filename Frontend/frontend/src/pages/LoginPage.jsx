import { useNavigate } from "react-router-dom";
import "../../node_modules/bootstrap/dist/css/bootstrap.css";
import { useState } from "react";
import LoginFormulario from "../components/LoginForm";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { useAuth } from "../context/AuthContext"; 

const LoginPage = () => {
    const [error, setError] = useState("");
    const { iniciarSesion } = useAuth();
    const navigate = useNavigate();

    const loginHandler = async (email, password) => {
        try {
            const response = await fetch("http://localhost:3000/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ email, password }),
            });
    
            const data = await response.json();
    
            if (response.ok) {
                setError("");
                iniciarSesion({
                    email: data.usuario.email,
                    nombre: data.usuario.nombre,
                    isAdmin: data.usuario.isAdmin, 
                });
                navigate("/");
            } else {
                setError(data.message || "Error en el inicio de sesión");
            }
        } catch (err) {
            setError("No se pudo conectar con el servidor.");
        }
    };
    

    return (
        <>
            <Header />
            <div className="row mt-5 mb-5">
                <div className="col-md-4"></div>
                <div className="col-md-4">
                    <LoginFormulario
                        actionOnClick={loginHandler}
                        modo={"login"}
                    />
                    {error && (
                        <div className="mt-4 alert alert-danger text-center">
                            Email o Contraseña incorrecta
                        </div>
                    )}
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
