import { Outlet, useNavigate } from "react-router-dom";
import { Header } from "../Componentes/Header";
import { NavBar } from "../Componentes/NavBar";
import './style.sass'

const GlobalLayout = () => {    
    return(
        <div className="globalLayout">
            <Header />
            <NavBar />
            <Outlet />
        </div>
    )
}

export default GlobalLayout;