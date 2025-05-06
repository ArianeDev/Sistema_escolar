import './style.sass';

export function Button({ text }){
    return(
        <div className="buttonContainer">
            <input type="submit" value={text} className='inputButton'/>
        </div>
    )
}