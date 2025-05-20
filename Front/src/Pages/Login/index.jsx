import { FormsInputs } from "../../Componentes/Forms";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { UserRound } from "lucide-react";
import axios from 'axios';
import { z } from "zod";
import './style.sass';

const schemaLogin = z.object({
    username: z.string()
        .min(1, 'Informe seu usuário')
        .max(25, 'Informe até 25 caracteres'),
    password: z.string()
        .min(1, "Informe ao menos um dígito")
        .max(15, 'Informe no máximo 15 caracteres')
})

export function Login(){
    const navigate = useNavigate();

    const {
        register, // Registra e valida
        handleSubmit, // no momento em que enviar o formulário
        formState: { errors } // aguarda erro
    } = useForm({ // usando biblioteca hookform
        resolver: zodResolver // fazendo solução com o schema acima
    })

    async function obterDados(data) {
        console.log(`dados: ${data}`)

        try{
            const response = await axios.post('http://127.0.0.1:8000/api/login/', {
                username: data.username,
                password: data.password
            });
            const { access, refresh, user } = response.data;

            localStorage.setItem('access_token', access);
            localStorage.setItem('refresh_token', refresh);
            localStorage.setItem('tipo_usuario', user.tipo_usuario);
            localStorage.setItem('user_id', user.id);
            localStorage.setItem('username', username);

            console.log("Login bem sucessido");
            navigate('/home');

        } catch (error){
            console.error("Erro no login", error);
            alert("Credenciais inválidas")
        }
    }

    const listLogin = [
        {
            "labelName": "Nome: ",
            "atributo": 'username',
            "type": "text",
            "placeholder": "Digite seu nome...",
            "set": "setUsername"
        },
        {
            "labelName": "Senha: ",
            "atributo": 'password',
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
                    <FormsInputs register={register} listInput={listLogin} method="post"/>
                    {errors.username && <p>{errors.username.message}</p>}
                    {errors.password && <p>{errors.password.message}</p>}
                </div>
            </div>
        </main>
    )
}