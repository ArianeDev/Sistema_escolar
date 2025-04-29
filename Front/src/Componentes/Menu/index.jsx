import './style.sass';

export function Menu(){
    return(
        <div className='container'>
            <table>
                <tr>
                    <td>Professores</td>
                    <td>Gestores</td>
                </tr>
                <tr>
                    <td>Disciplina</td>
                    <td>Ambiente</td>
                </tr>
            </table>
        </div>
    )
}