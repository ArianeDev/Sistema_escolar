import { FormsInputs } from "../../Componentes/Forms";
import { UserRound } from "lucide-react";
import { ACCESS_TOKEN, REFRESH_TOKEN } from "../../service/token"
import  { api } from "../../service/api"
import './style.sass';
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export function Login(){
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [sucess, setSucess] = useState(null);
    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();
        setLoading(true);
        setError(null);
        setSucess(null);

        try{
            const res = await api.post(route, { username, password });

            localStorage.setItem(ACCESS_TOKEN, res.data.access);
            localStorage.setItem(REFRESH_TOKEN, res.data.refresh);
            navigate("/");
            window.location.reload();
        } catch{

        }
    }

    // https://www.youtube.com/watch?v=o-iGrZ7-Ckc

    const listLogin = [
        {
            "labelName": "Nome: ",
            "type": "text",
            "placeholder": "Digite seu nome...",
            "set": "setUsername"
        },
        {
            "labelName": "Senha: ",
            "type": "password",
            "placeholder": "Digite sua senha...",
            "set": "setPassword"
        }
    ]

    return(
        <main className="mainLogin">
            <div className="loginForms">
                <div className="mensage">
                    <h1>Bem-vindo(a) ao EduManager</h1>
                    <p>Acesse com o seu login</p>
                </div>
                <div className="formLogin">
                    <div className="titleLogin">
                        <UserRound className="iconUser" />
                        <h1 className="h1_titleLogin">Login</h1>
                    </div>
                    {error && <p>{error}</p>}
                    <FormsInputs listInput={listLogin} method="post" submitFuction={handleLogin}/>
                </div>
            </div>
        </main>
    )
}