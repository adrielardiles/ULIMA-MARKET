import { createBrowserRouter } from 'react-router-dom';
import LandingPage from './pages/LadingPage';
import TCPage from './pages/TCPage';
import HorariosPage from './pages/HorariosPage';
import DatosPersonalesPage from './pages/DatosPersonalesPage';
import PerfilPage from './pages/PerfilPage';
import Pedidos from './pages/PedidosPage';
import QAPage from "./pages/QAPage"
import RegisterPage from './pages/RegisterPage';
import LoginPage from './pages/LoginPage';
import RecuperarCuenta from './pages/RecuperarCuenta';

const router = createBrowserRouter([
    {path: "/", element : <LandingPage/>},
    {path: "/terminos-condiciones", element: <TCPage/>},
    {path: "/horarios-atencion", element: <HorariosPage/>},
    {path: "/datos-personales", element: <DatosPersonalesPage/>},
    {path: "/perfil", element: <PerfilPage/>},
    {path: "/pedidos", element: <Pedidos/>},
    {path: "/preguntas-frecuentes", element: <QAPage/>},
    {path: "/register", element: <RegisterPage/>},
    {path: "/login", element: <LoginPage/>},
    {path: "/recuperar-contraseña", element: <RecuperarCuenta/>}





])

export default router