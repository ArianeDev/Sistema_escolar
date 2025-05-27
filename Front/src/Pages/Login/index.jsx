import { FormsInputs } from "../../Componentes/Forms";
import { useNavigate } from "react-router-dom";
import { UserRound } from "lucide-react";
import { useState } from "react";
import axios from 'axios';
import './style.sass';

export function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('http://127.0.0.1:8000/api/login/', {
                username: username,
                password: password
            });
    
            console.log("Resposta do servidor:", response.data);
            console.log(username, password);

            const { access, refresh } = response.data;
    
            localStorage.setItem('access_token', access);
            localStorage.setItem('refresh_token', refresh);

            localStorage.setItem('token', access); 

            const responseUser = await axios.get('http://127.0.0.1:8000/api/me/', {
                headers: {
                    Authorization: `Bearer ${access}`
                }
            });

            const {tipo_usuario, id} = responseUser.data;
            localStorage.setItem('cargo', tipo_usuario);
            localStorage.setItem('id', id);
    
            console.log("Login bem-sucedido");
            navigate('home');
        } catch (error) {
            console.error("Erro no login", error);
            alert("Credenciais inválidas");
            console.log(username, password);
        }

    }

    const listLogin = [
        {
            labelName: "Nome: ",
            atributo: username,
            type: "text",
            placeholder: "Digite seu nome...",
            setFunction: setUsername
        },
        {
            labelName: "Senha: ",
            atributo: password,
            type: "password",
            placeholder: "Digite sua senha...",
            setFunction: setPassword
        }
    ];

    return (
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
                    <FormsInputs listInput={listLogin} method="post" methodFunction={handleLogin} textButton="Logar"/>
                </div>
            </div>
        </main>
    );
}