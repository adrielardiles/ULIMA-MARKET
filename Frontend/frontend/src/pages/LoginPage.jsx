import { useNavigate } from "react-router-dom"
import "../../node_modules/bootstrap/dist/css/bootstrap.css"


import { useState } from "react"
import LoginFormulario from "../components/LoginForm"
import Footer from "../components/Footer"
import Header from "../components/Header"


const LoginPage = () => {
    const [error, setError] = useState("")

    const navigate = useNavigate()

    const loginHandler = async (username, password) => {

        if (username === "Ulima" && password === "123")
        {
            setError("")
            navigate("/")
        }else
        {
            setError("Error Login")
        }
        
    }

    return  <>
        <Header/>
        
        <div className="row mt-5 mb-5">
            <div className="col-md-4"></div>
            <div className="col-md-4">
                <LoginFormulario
                    loginOnClick={ loginHandler }
                    modo={"login"}/>
                {
                    (() => {
                        if (error !== "") {
                            return <div className="mt-4 alert alert-danger text-center"> Email o Contraseña incorrecta </div>
                        }
                    })(error)
                }
            </div>
            <div className="col-md-4"></div>
        </div> 

        <Footer/>
    </>
}

export default LoginPage