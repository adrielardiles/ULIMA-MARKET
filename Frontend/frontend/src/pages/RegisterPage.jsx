import { useState } from "react";
import LoginFormulario from "../components/LoginForm";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useAuth } from "../context/AuthContext";

const RegistroPage = () => {
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");
    const { iniciarSesion } = useAuth();

    const registrarUsuarioHandler = async (nombre, correo, paterno, materno, genero, password) => {
        try {
            const response = await fetch("http://localhost:3000/usuario", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    email: correo,
                    password: password,
                    nombre: nombre,
                    apellidoPaterno: paterno,
                    apellidoMaterno: materno,
                    telefono: " ",
                    isAdmin: false, 
                    genero: genero,
                }),
            });
    
            const data = await response.json();
    
            if (response.ok) {
                setError("");
                iniciarSesion({
                    email: data.usuario.email,
                    nombre: data.usuario.nombre,
                    isAdmin: data.usuario.isAdmin, 
                });
                setSuccess("Usuario registrado con éxito");
            }
        } catch (err) {
            setError("No se pudo conectar con el servidor.");
            setSuccess("");
        }
    };
    

    return<>
            <Header />
            <div className="row mt-5 mb-5">
                <div className="col-md-4"></div>
                <div className="col-md-4">
                    <LoginFormulario
                        actionOnClick={
                            registrarUsuarioHandler
                        }
                        modo={"registro"}
                    />
                    {error && (
                        <div className="mt-4 alert alert-danger text-center">
                            {error}
                        </div>
                    )}
                    {success && (
                        <div className="mt-4 alert alert-success text-center">
                            {success}
                        </div>
                    )}
                </div>
                <div className="col-md-4"></div>
            </div>
            <Footer />
        </>
    
};

export default RegistroPage