import './style.sass';

export function Input({ register, atributo, type, placeholder}){
    return(
        <div className="input_container">
            <input {...register(atributo)} type={type} placeholder={placeholder} className='inputForms'/>
        </div>
    )
}