import './style.sass';
import { FormsInputs } from '../Forms';
import { useContext, useEffect, useState } from 'react';
import  api  from '../../service/api';

export function Modal({ typeURL, listAtributos, itemSelecionando, onClose, isOpen}){
    const token = localStorage.getItem('token');
    const [formData, setFormData] = useState({});

    console.log(formData);


    useEffect(() => {
        if (itemSelecionando) {
            const initialData = {};
            listAtributos.forEach(attr => {
              initialData[attr] = itemSelecionando[attr] || "";
            });
            setFormData(initialData);
          }
    }, [itemSelecionando]);

    const submitUpdate = async () => {
		try{
			const response = await api.put(`/${typeURL}/${itemSelecionando.id}`, formData, {headers: {Authorization: `Bearer ${token}`}});
			console.log("Atualizado com sucesso", response.data)

		} catch (error) {
			console.error("Erro na requisição:", error);
		}
	}

	const handleSubmitUpdate = (e) => {
		e.preventDefault();
        submitUpdate();
	}

    if(!isOpen){
        return null;
    }

    return(
        <div className="modalBack">
            <div className="modalContainer">
                <div className="modalHeader">
                    <button onClick={onClose}>x</button>
                </div>
                <div className="modalMain">
                    <div className="foms">
                        <FormsInputs 
                            listInput={listAtributos} 
                            formData={formData}
                            methodFunction={handleSubmitUpdate} 
                            method="PUT" title="Atualizar" 
                            textButton="Atualizar"/>
                    </div>
                </div>
            </div>
        </div>
    )
}