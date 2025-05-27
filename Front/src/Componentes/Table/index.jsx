import './style.sass'
import { UserPen } from 'lucide-react';
import { Trash2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { Modal } from '../Modal';

export function Table({ typeURL, listAtributos, data, columns, type }){
    const [isOpen, setIsOpen] = useState(false);
    const [selecionado, setSelecionado] = useState(null);

    function handleOpenModal(selecionado) {
        setSelecionado(selecionado);
        setIsOpen(true);
    }

    function handleCloseModal() {
        setSelecionado(null);
        setIsOpen(false);
    }

    return(
        <>
            <table>
                <thead>
                    <tr>
                        {columns.map((col, index) => (
                            <th key={index} className={index <= 1 ? 'firstItens' : ''}>{col.label}</th>
                        ))}
                        <th className='actionData'>Ações</th>
                    </tr>
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
                                    <button onClick={() => handleOpenModal(item)}><UserPen className='userPen'/></button>
                                </span>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            {isOpen && selecionado && (
                <Modal 
                    typeURL={typeURL} 
                    listAtributos={listAtributos}
                    itemSelecionando={selecionado} 
                    onClose={handleCloseModal} 
                    isOpen={isOpen}
                />
            )}
        </>
    )
}