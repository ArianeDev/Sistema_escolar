import { FormsInputs } from "../../Componentes/Forms";
import './style.sass';

export function Forms(){
    const listInput = [
        {
            "type": "text",
            "placeholder": "Atualize o primeiro nome...",
            "labelName": "Nome:"
        },
        {
            "type": "text",
            "placeholder": "Atualize o segundo nome...",
            "labelName": "Sobrenome:"
        },
        {
            "type": "email",
            "placeholder": "Atualize o email...",
            "labelName": "Email:"
        },
        {
            "type": "text",
            "placeholder": "Atualize o telefone...",
            "labelName": "Telefone:"
        },
        {
            "type": "text",
            "placeholder": "Atualize o cargo...",
            "labelName": "Cargo:"
        }
    ]

    return(
        <div className="containerForm">
            <div className="forms">
                <h1>Atualizar</h1>
                <FormsInputs listInput={listInput}/>
            </div>
        </div>
    )
}