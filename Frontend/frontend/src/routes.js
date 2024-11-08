import { createBrowserRouter } from 'react-router-dom';
import LandingPage from './pages/LadingPage';
import TCPage from './pages/TCPage';
import HorariosPage from './pages/HorariosPage';
import DatosPersonalesPage from './pages/DatosPersonalesPage';
import PerfilPage from './pages/PerfilPage';
import Pedidos from './pages/PedidosPage';
import TarjetasPage from './pages/TarjetasPage';
import QAPage from "./pages/QAPage"
import RegisterPage from './pages/RegisterPage';
import LoginPage from './pages/LoginPage';

const router = createBrowserRouter([
    {path: "/", element : <LandingPage/>},
    {path: "/terminos-condiciones", element: <TCPage/>},
    {path: "/horarios-atencion", element: <HorariosPage/>},
    {path: "/datos-personales", element: <DatosPersonalesPage/>},
    {path: "/perfil/:id", element: <PerfilPage/>},
    {path: "/pedidos", element: <Pedidos/>},
    {path: "/tarjetas", element: <TarjetasPage/>},
    {path: "/preguntas-frecuentes", element: <QAPage/>},
    {path: "/register", element: <RegisterPage/>},
    {path: "/login", element: <LoginPage/>}





])

export default router