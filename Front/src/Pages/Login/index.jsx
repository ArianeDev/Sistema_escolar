import { Input } from "../../Componentes/Input";
import { Label } from "../../Componentes/Label";
import { Button } from "../../Componentes/Button";
import imgLogin from "../../assets/img/log-in.png";
import './style.sass';

export function Login(){
    return(
        <main className="mainLogin">
            <div className="loginForms">
                <div className="imgLogin">
                    <img src={imgLogin} alt="" />
                </div>
                <form method="post">
                    <h1>Login</h1>
                    <Label title="Username: " />
                    <Input type="text" placeholder="Digite o username" />
                    <Label title="Senha: " />
                    <Input type="password" placeholder="Digite a senha" />
                    <Button text="Logar" />
                </form>
            </div>
        </main>
    )
}