import './style.sass'
import { UserPen } from 'lucide-react';
import { Trash2 } from 'lucide-react';

export function Table({ openModal, data, columns, submitDelete }){
    const cargo = localStorage.getItem('cargo');

    return(
        <table>
            <thead>
                <tr>
                    {columns.map((col, index) => (
                        <th key={index} className={index <= 1 ? 'firstItens' : ''}>{col.label}</th>
                    ))}
                    {cargo === 'G' && (
                        <th className='actionData'>Ações</th>
                    )}
                </tr>
            </thead>
            <tbody>
                {data.map((item, key) => (
                    <tr key={item.id || key}>
                        {columns.map((col, index) => (
                            <td key={index}  className={index <= 1 ? 'firstItens' : 'itensTable'}>{item[col.key]}</td>
                        ))}
                        {cargo === 'G' && (
                            <td className='icons'>
                                <span title='Deletar'>
                                    <button onClick={() => submitDelete(item.id)}><Trash2 className='trash'/></button>
                                </span>
                                <span title='Atualizar'>
                                    <button onClick={() => openModal(item)}><UserPen className='userPen'/></button>
                                </span>
                            </td>
                        )}
                    </tr>
                ))}
            </tbody>
        </table>
    )
}