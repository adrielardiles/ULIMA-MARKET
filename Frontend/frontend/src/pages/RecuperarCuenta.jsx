import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import IngresarCodigo from "../components/IngresarCodigo";
import CambiarContrasena from "../components/CambiarContrasena";

const RecuperarCuenta = () => {
    const [etapa, setEtapa] = useState("ingresarCodigo"); 
    const [email, setEmail] = useState(""); 
    const [codigoCorrecto, setCodigoCorrecto] = useState(""); 
    const navigate = useNavigate();

    const manejarCodigoGenerado = (codigo, correo) => {
        setCodigoCorrecto(codigo);
        setEmail(correo); 
    };
    

    const manejarCodigoIngresado = (codigo) => {
        if (codigo === codigoCorrecto) {
            setEtapa("cambiarContrasena");
        } else {
            alert("El código ingresado es incorrecto.");
        }
    };

    const manejarContrasenaCambiada = () => {
        alert("Contraseña cambiada con éxito.");
        navigate("/");
    };

    return (
        <>
            <Header />
            <div className="container mt-5 mb-5">
                {etapa === "ingresarCodigo" ? (
                    <IngresarCodigo
                        manejarCodigoIngresado={manejarCodigoIngresado}
                        manejarCodigoGenerado={(codigo, correo) => manejarCodigoGenerado(codigo, correo)} 
                        reenviarCodigo={() =>
                            alert("Código reenviado al correo electrónico proporcionado.")
                        }
                    />

                ) : (
                    <CambiarContrasena
                        manejarContrasenaCambiada={manejarContrasenaCambiada}
                        email={email}
                    />
                )}
            </div>
            <Footer />
        </>
    );
};

export default RecuperarCuenta;
