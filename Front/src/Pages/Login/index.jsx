import { Input } from "../../Componentes/Input"

export function Login(){
    return(
        <main>
            <form method="post">
                <Input type="text" placeholder="Digite o username" />
                <Input type="password" placeholder="Digite a senha" />
            </form>
        </main>
    )
}