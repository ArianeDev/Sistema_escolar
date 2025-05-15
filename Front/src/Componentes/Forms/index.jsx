import { Input } from '../Input';
import { Label } from '../Label';
import { Button } from '../Button';

export function FormsInputs({ listInput, method}){
    return(
        <form method={method} >
            {listInput.map((item, key) => (
                <div className="containerInput">
                    <Label title={item.labelName}/>
                    <Input type={item.type} placeholder={item.placeholder}/>
                </div>
            ))}
            <Button text="Atualizar"/>
        </form>
    )
}