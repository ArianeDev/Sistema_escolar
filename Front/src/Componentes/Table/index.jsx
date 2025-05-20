import './style.sass'
import { UserPen } from 'lucide-react';
import { Trash2 } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Table({ data, columns, type }){

    return(
        <table>
            <thead>
                {columns.map((col, index) => (
                    <th key={index}>{col.label}</th>
                ))}
                <th className='actionData'>Ações</th>
            </thead>
            <tbody>
                {data.map((item, key) => (
                    <tr key={key}>
                        {columns.map((col, index) => (
                            <td key={index}  className={index <= 1 ? 'firstItens' : 'itensTable'}>{item[col.key]}</td>
                        ))}
                        <td className='icons'>
                            <span title='Deletar'>
                                <Trash2 className='trash'/>
                            </span>
                            <span title='Atualizar'>
                                <Link to={`/atualizar${type}`}><UserPen className='userPen'/></Link>
                            </span>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}