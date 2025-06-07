import { useState, useEffect } from 'react';
import { ErrorMessage } from '../ErrorMenssage';
import { FormsInputs } from '../Forms';
import api from '../../service/api';
import './style.sass';

export function Modal({ typeURL, itemSelecionando, onClose, isOpen}){
    const [error, setError] = useState("");

    const token = localStorage.getItem('token');

    // Atributos do professor
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [ni, setNi] = useState('');
    const [telefone, setTelefone] = useState('');
    const [dt_nascimento, setDt_nascimento] = useState('');
    const [dt_contratacao, setDt_contratacao] = useState('');

    // Atributos do ambiente
    const [dt_inicio, setDt_inicio] = useState('');
    const [dt_termino, setDt_termino] = useState('');
    const [periodo, setPeriodo] = useState('');
    const [sala_reservada, setSala_reservada] = useState('');
    const [disciplina, setDisciplina] = useState('');

    // Atributos da disciplina
    const [nome, setNome] = useState('');
    const [curso, setCurso] = useState('');
    const [carga_horaria, setCarga_horaria] = useState('');
    const [decricao, setDecricao] = useState('');
    const [professor_responsavel, setProfessor_responsavel] = useState('');

    const listInputDisciplina = [
        {
            "type": "text",
            "value": nome,
            "setFunction": setNome,
            "placeholder": "Digite o nome da disciplina...",
            "labelName": "Nome:"
        },
        {
            "type": "text",
            "value": curso,
            "setFunction": setCurso,
            "placeholder": "Digite o curso...",
            "labelName": "Curso:"
        },
        {
            "type": "number",
            "value": carga_horaria,
            "setFunction": setCarga_horaria,
            "placeholder": "Digite a carga horária...",
            "labelName": "Carga horária:"
        },
        {
            "type": "text",
            "value": decricao,
            "setFunction": setDecricao,
            "placeholder": "Digite a descrição...",
            "labelName": "Descrição:"
        },
        {
            "type": "select",
            "value": professor_responsavel,
            "setFunction": setProfessor_responsavel,
            "placeholder": "",
            "labelName": 'Professor responsável:',
        }
    ]

    const listInputProfessor = [
        {
            "type": "text",
            "value": username,
            "setFunction": setUsername,
            "placeholder": "Digite o nome...",
            "labelName": "Nome:"
        },
        {
            "type": "email",
            "value": email,
            "setFunction": setEmail,
            "placeholder": "Digite o email...",
            "labelName": "Email:"
        },
        {
            "type": "text",
            "value": ni,
            "setFunction": setNi,
            "placeholder": "Digite o NI...",
            "labelName": "NI:"
        },
        {
            "type": "text",
            "value": telefone,
            "setFunction": setTelefone,
            "placeholder": "Digite o telefone...",
            "labelName": "Telefone:"
        },
        {
            "type": "text",
            "value": dt_nascimento,
            "setFunction": setDt_nascimento,
            "placeholder": "Digite a data de nascimento...",
            "labelName": "Data de nascimento:"
        },
        {
            "type": "text",
            "value": dt_contratacao,
            "setFunction": setDt_contratacao,
            "placeholder": "Digite a data de contratação...",
            "labelName": "Data de contratação:"
        },
    ]

    const listInputAmbiente = [
        {
            "type": "text",
            "value": sala_reservada,
            "setFunction": setSala_reservada,
            "placeholder": "Digite a sala reservada...",
            "labelName": "Sala reservada:"
        },
        {
            "type": "date",
            "value": dt_inicio,
            "setFunction": setDt_inicio,
            "placeholder": "Digite a data de início...",
            "labelName": "Data de início:"
        },
        {
            "type": "date",
            "value": dt_termino,
            "setFunction": setDt_termino,
            "placeholder": "Digite a data de término...",
            "labelName": "Data de término:"
        },
        {
            "type": "text",
            "value": periodo,
            "setFunction": setPeriodo,
            "placeholder": "Digite o período...",
            "labelName": 'Período:'
        },
        {
            "type": "text",
            "value": professor_responsavel,
            "setFunction": setProfessor_responsavel,
            "placeholder": "Digite o professor responsável...",
            "labelName": 'Professor responsável:',
        },
        {
            "type": 'text',
            "value": disciplina,
            "setFunction": setDisciplina,
            "placeholder": "Digite a disciplina...",
            'labelName': 'Disciplina:',
        }
    ]

    useEffect(() => {
        if(itemSelecionando){
            setUsername(itemSelecionando.username || '');
            setEmail(itemSelecionando.email || '');
            setNi(itemSelecionando.ni || '');
            setTelefone(itemSelecionando.telefone || '');
            setDt_nascimento(itemSelecionando.dt_nascimento || '');
            setDt_contratacao(itemSelecionando.dt_contratacao || '');

            setNome(itemSelecionando.nome || '');
            setCurso(itemSelecionando.curso || '');
            setCarga_horaria(itemSelecionando.carga_horaria || '');
            setDecricao(itemSelecionando.decricao || '');
            setProfessor_responsavel(itemSelecionando.professor_responsavel || '');

            setSala_reservada(itemSelecionando.sala_reservada || '');
            setDt_inicio(itemSelecionando.dt_inicio || '');
            setDt_termino(itemSelecionando.dt_termino || '');
            setPeriodo(itemSelecionando.periodo || '');
            setDisciplina(itemSelecionando.disciplina || '');
        } else {
            setUsername('');
            setEmail('');
            setNi('');
            setTelefone('');
            setDt_nascimento('');
            setDt_contratacao('');
        
            setNome('');
            setCurso('');
            setCarga_horaria('');
            setDecricao('');
            setProfessor_responsavel('');
        
            setSala_reservada('');
            setDt_inicio('');
            setDt_termino('');
            setPeriodo('');
            setDisciplina('');
          }
    }, [itemSelecionando]);

    const handleSubmitProfessor = async () => {
        const dataProfessor = {
            username,
            password: itemSelecionando?.password ?? username,
            email,
            ni,
            telefone,
            dt_nascimento,
            dt_contratacao,
            tipo_usuario: "P"
        };
        const dataAmbiente = {
            sala_reservada,
            dt_inicio,
            dt_termino,
            periodo,
            professor_responsavel,
            disciplina
        };
        const dataDisciplina = {
            nome,
            curso,
            carga_horaria,
            decricao,
            professor_responsavel
        }; 

        let data = '';

        if(typeURL === 'professor'){
            data = dataProfessor;
        } else if (typeURL === 'ambiente'){
            data = dataAmbiente;
        } else if (typeURL === 'disciplina'){
            data = dataDisciplina;
        }
        
        try {
            if (itemSelecionando?.id) {
                const response = await api.put(`/${typeURL}/${itemSelecionando.id}`, data, {
                    headers: { Authorization: `Bearer ${token}` }
                });
                const responseData = await response.data;
                if (!response.ok) {
                    setError("Erro ao atualizar o item.", responseData.detail);
                } else {
                    window.alert("Item atualizado com sucesso!");
                }
            } else {
                const response = await api.post(`/${typeURL}/`, data, {
                    headers: { Authorization: `Bearer ${token}` }
                });
                const responseData = await response.data;
                if (!response.ok) {
                    setError("Erro ao cadastrar o item.", responseData.detail);
                } else {
                    window.alert("Item cadastrado com sucesso!");
                }
            }

            window.location.reload();
            onClose();

        } catch (error) {
            setError("Erro na requisição. Por favor, tente novamente.");
            console.error("Erro na atualização:", error);
        }
    }


    const handleSubmitUpadte = (e) => {
        e.preventDefault();
        handleSubmitProfessor();
    }

    if(!isOpen){
        return null;
    }
    let context = '';

    if(typeURL === 'professor'){
        context = listInputProfessor
    } else if(typeURL === 'ambiente'){
        context = listInputAmbiente;
    } else if(typeURL === 'disciplina'){
        context = listInputDisciplina;
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
                        listInput={context} 
                        methodFunction={handleSubmitUpadte} 
                        method={itemSelecionando ? "put" : "post"}
                        title={itemSelecionando ? "Atualizar" : "Cadastrar"}
                        textButton={itemSelecionando ? "Atualizar" : "Cadastrar"}
                    />
                    {error && <ErrorMessage menssage={error} />}
                    </div>
                </div>
            </div>
        </div>
    )
}