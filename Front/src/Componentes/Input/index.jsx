import './style.sass';

export function Input({ atributo, type, placeholder, setFunction }) {
    return(
        <div className="input_container">
            <input 
                type={type} 
                value={atributo} 
                placeholder={placeholder} 
                onChange={(e) => setFunction(e.target.value)}
                className='inputForms'
            />
        </div>
    )
}