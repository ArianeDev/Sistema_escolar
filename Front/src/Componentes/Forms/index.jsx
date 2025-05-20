import { Input } from '../Input';
import { Label } from '../Label';
import { Button } from '../Button';
import './style.sass';

export function FormsInputs({ register, listInput, method, title}){
    return(
        <div className="containerForm">
            <div className="forms">
                <h1>{title}</h1>
                <form method={method} >
                    {listInput.map((item, key) => (
                        <div className="containerInput">
                            <Label title={item.labelName}/>
                            <Input register={register} atributo={item.atributo} type={item.type} placeholder={item.placeholder}/>
                        </div>
                    ))}
                    <Button text="Atualizar"/>
                </form>
            </div>
        </div>
    )
}