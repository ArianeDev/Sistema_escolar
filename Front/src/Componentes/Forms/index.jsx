import { useState, useEffect } from 'react';
import { Input } from '../Input';
import { Label } from '../Label';
import { Button } from '../Button';
import './style.sass';

export function FormsInputs({ listInput, methodFunction, method, title, textButton }){    
    return(
        <div className="containerForm">
            <div className="forms">
                <h1>{title}</h1>
                <form method={method} onSubmit={methodFunction}>
                    {listInput.map((item, key) => (
                        <div className="containerInput">
                            <Label title={item.labelName}/>
                            <Input 
                                atributo={item.atributo} 
                                type={item.type} 
                                placeholder={item.placeholder}
                                setFunction={item.setFunction}
                            />
                        </div>
                    ))}
                    <Button text={textButton}/>
                </form>
            </div>
        </div>
    )
}