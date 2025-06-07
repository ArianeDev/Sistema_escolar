import { ErrorMessage } from '../ErrorMenssage';
import './style.sass';

export function Input({ atributo, type, placeholder, setFunction }) {

    return(
        <div className="input_container">

            {type !== 'select' ? (
                <input 
                    type={type} 
                    value={atributo} 
                    placeholder={placeholder} 
                    onChange={(e) => setFunction(e.target.value)}
                    className='inputForms'
                />
            ) : (
                <select 
                    value={atributo} 
                    onChange={(e) => setFunction(e.target.value)} 
                    className='inputForms'
                >
                    <option value="" disabled>Selecione uma opção</option>
                    {options.map((option, index) => (
                        <option key={index} value={option.value}>{option.label}</option>
                    ))}
                </select>
            )}
        </div>
    )
}