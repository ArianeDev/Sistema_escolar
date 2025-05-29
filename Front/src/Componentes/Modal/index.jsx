import { useState, useEffect } from 'react';
import { FormsInputs } from '../Forms';
import api from '../../service/api';
import './style.sass';

export function Modal({ typeURL, itemSelecionando, listInput, onClose, isOpen}){
    const [formData, setFormData] = useState({});
    const token = localStorage.getItem('token');

    useEffect(() => {
        if (itemSelecionando) {
            const initialData = {};
            listInput.forEach(attr => {
                const key = attr.key  || attr.labelName?.toLowerCase().replace(/\s+/g, '_').replace(/[^a-zA-Z0-9_]/g, '');
                initialData[key] = itemSelecionando[key] || '';
            });
            setFormData(initialData);
        }
    }, [itemSelecionando, listInput]);

    const handleChange = (key, value) => {
        setFormData(prevData => ({
            ...prevData,
            [key]: value
        }));
    }

    const handleSubmitUpadte = async (e) => {
        e.preventDefault();
        try{
            api.put(`/${typeURL}/${itemSelecionando.id}`, { ...formState, tipo_usuario: typeURL === "professor" ? "P" : undefined}, {
                headers: {Authorization: `Bearer ${token}`}
            });

            window.location.reload();
            onClose();

        } catch (error) {
            console.error("Erro na requisição:", error);
        }
    }

    console.log(itemSelecionando)

    if(!isOpen){
        return null;
    }

    const inputs = listInput.map(attr => ({
        ...attr,
        value: formData[attr.key || attr.labelName?.toLowerCase().replace(/\s+/g, '_')] || '',
        setFunction: (val) => handleChange(attr.key || attr.labelName?.toLowerCase().replace(/\s+/g, '_'), val)
    }));

    return(
        <div className="modalBack">
            <div className="modalContainer">
                <div className="modalHeader">
                    <button onClick={onClose}>x</button>
                </div>
                <div className="modalMain">
                    <div className="foms">
                    <FormsInputs 
                        listInput={listInput} 
                        methodFunction={handleSubmitUpadte} 
                        method="put"
                        title="Atualizar"
                        textButton="Atualizar"/>
                    </div>
                </div>
            </div>
        </div>
    )
}