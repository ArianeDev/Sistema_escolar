import { Input } from '../Input';
import { Label } from '../Label';
import { Button } from '../Button';

export function FormsInputs({ listInput, method, submitFuction }){
    return(
        <form method={method} onSubmit={submitFuction}>
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