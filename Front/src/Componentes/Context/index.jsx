import React, { useState } from 'react';
import { ErrorMessage } from '../ErrorMenssage';
import { Title } from '../Title';
import { Table } from '../Table';
import { Modal } from '../Modal';
import  api  from '../../service/api';

export function Context({ typeURL, data, columns, type }){
    const [error, setError] = useState("");
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
			const response = await api.delete(`/${typeURL}/${id}`, {headers: {Authorization: `Bearer ${token}`}});
			const data = await response.json()
            window.location.reload();
            
            if (!response.ok){
                setError("Erro ao deletar o item.", data.detail);
            } else {
                alert("Item deletado com sucesso!");
            }

		} catch (error) {
			console.error("Erro na requisição:", error);
		}
	}

    return(
        <>
            <Title text={type} typeURL={typeURL} openModal={() => handleOpenModal(null)} />
            <Table
                data={data} 
                columns={columns} 
                openModal={handleOpenModal}
                submitDelete={submitDelete}
            />
            {error && <ErrorMessage menssage={error} />}

            {isOpen && (
                <Modal 
                    typeURL={typeURL}
                    itemSelecionando={selecionado} 
                    onClose={handleCloseModal} 
                    isOpen={isOpen}
                />
            )}
        </>
    )
}