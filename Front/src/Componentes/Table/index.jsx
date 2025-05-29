import './style.sass'
import { UserPen } from 'lucide-react';
import { Trash2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { Modal } from '../Modal';
import  api  from '../../service/api';

export function Table({ typeURL, listInput, data, columns, type }){
    const [isOpen, setIsOpen] = useState(false);
    const [selecionado, setSelecionado] = useState(null);
    const token = localStorage.getItem('token');

    function handleOpenModal(selecionado) {
        setSelecionado(selecionado);
        setIsOpen(true);
    }

    function handleCloseModal() {
        setSelecionado(null);
        setIsOpen(false);
    }

    const submitDelete = async (id) => {
		try{
			await api.delete(`/${typeURL}/${id}`, {headers: {Authorization: `Bearer ${token}`}});
			window.location.reload();
		} catch (error) {
			console.error("Erro na requisição:", error);
		}
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
                        <tr key={item.id || key}>
                            {columns.map((col, index) => (
                                <td key={index}  className={index <= 1 ? 'firstItens' : 'itensTable'}>{item[col.key]}</td>
                            ))}
                            <td className='icons'>
                                <span title='Deletar'>
                                    <button onClick={() => submitDelete(item.id)}><Trash2 className='trash'/></button>
                                </span>
                                <span title='Atualizar'>
                                    <button onClick={() => handleOpenModal(item)}><UserPen className='userPen'/></button>
                                </span>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            {isOpen && (
                <Modal 
                    typeURL={typeURL}
                    listInput={listInput}
                    itemSelecionando={selecionado} 
                    onClose={handleCloseModal} 
                    isOpen={isOpen}
                />
            )}
        </>
    )
}