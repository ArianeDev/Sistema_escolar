import './style.sass';

export function Label({ title }){
    return(
        <div className="label_container">
            <label>{title}</label>
        </div>
    )
}