import { Outlet, useNavigate } from "react-router-dom";
import { Header } from "../Componentes/Header";
import './style.sass'

const GlobalLayout = () => {    
    return(
        <div className="globalLayout">
            <Header />
            <Outlet />
        </div>
    )
}

export default GlobalLayout;