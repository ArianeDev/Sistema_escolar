export function Input({ type, placeholder}){
    return(
        <div className="input_container">
            <input type={type} placeholder={placeholder}/>
        </div>
    )
}