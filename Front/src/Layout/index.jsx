// Nesta parte será manuseados todos os componentes do site com seus dados

import { Outlet, useLocation } from "react-router-dom";
import { FormsInputs } from "../Componentes/Forms";
import { Header } from "../Componentes/Header";
import { NavBar } from "../Componentes/NavBar";
import { Table } from "../Componentes/Table";
import { Footer } from "../Componentes/Footer";
import { Title } from "../Componentes/Title";
import { use, useEffect, useState } from "react";
import api from "../service/api";
import './style.sass'

const ambienteColumns = [
    { key: 'sala_reservada', label: 'Sala' },
    { key: 'dt_inicio', label: 'Data ínicio' },
    { key: 'dt_termino', label: 'Data final' },
    { key: 'periodo', label: 'Período' },
    { key: 'professor_responsavel', label: 'Professor' },
    { key: 'disciplina', label: 'Disciplina' },
];
const disciplinaColumns = [
    { key: 'nome', label: 'Nome' },
    { key: 'curso', label: 'Curso' },
    { key: 'carga_horaria', label: 'Carga horária' },
    { key: 'decricao', label: 'Descrição' },
    { key: 'professor_responsavel', label: 'Professor' },
];
const professorColumns = [
    { key: 'username', label: 'Nome' },
    { key: 'email', label: 'Email' },
    { key: 'ni', label: 'NI' },
    { key: 'telefone', label: 'Telefone' },
    { key: 'dt_nascimento', label: 'Data nascimento' },
    { key: 'dt_contratacao', label: 'Data contratação' },
];

const GlobalLayout = () => {
    // Atributos de todos as tabelas

    // Professor
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [ni, setNi] = useState('');
    const [telefone, setTelefone] = useState('');
    const [dt_nascimento, setDt_nascimento] = useState('');
    const [dt_contratacao, setDt_contratacao] = useState('');

    const listInputProfessor = [
        {
            "type": "text",
            "value": username,
            "setFunction": setUsername,
            "placeholder": "Digite o nome...",
            "labelName": "Nome:"
        },
        {
            "type": "password",
            "value": password,
            "setFunction": setPassword,
            "placeholder": "Digite a senha...",
            "labelName": "Senha:"
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
    

    // Disciplina
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

    // Ambiente
    const [dt_inicio, setDt_inicio] = useState('');
    const [dt_termino, setDt_termino] = useState('');
    const [periodo, setPeriodo] = useState('');
    const [sala_reservada, setSala_reservada] = useState('');
    const [disciplina, setDisciplina] = useState('');

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
            "type": "select",
            "value": professor_responsavel,
            "setFunction": setProfessor_responsavel,
            "placeholder": "",
            "labelName": 'Professor responsável:',
        },
        {
            "type": 'select',
            "value": disciplina,
            "setFunction": setDisciplina,
            "placeholder": "",
            'labelName': 'Disciplina:',
        }
    ]

    const [ambienteData, setAmbienteData] = useState([]);
    const [disciplinaData, setDisiciplinaData] = useState([]);
    const [professorData, setProfessorData] = useState([]);
    const location = useLocation();
    const token = localStorage.getItem('token');
    
    async function getAmbientes(professores, disciplinas) {
        try {
            const response = await api.get('/ambiente', {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            const listAmbiente = response.data;

            const listAmbienteProfessorDisciplina = listAmbiente.map(ambiente => {
                const professor = professores.find(amb => amb.id === ambiente.professor_responsavel);
                const disciplina = disciplinas.find(disc => disc.id === ambiente.disciplina);
                return {
                    ...ambiente,
                    professor_responsavel: professor ? professor.username : 'Não atribuído',
                    disciplina: disciplina ? disciplina.nome : 'Não atribuída'
                };
            })

            setAmbienteData(listAmbienteProfessorDisciplina);
        } catch (error) {
            console.error("Erro ao buscar ambiente: ", error);
        }
    }
    async function getDisciplina(professores) {
        try {
            const response = await api.get('/disciplina', {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            const listDisciplina = response.data;

            const listDisciplinaProfessor = listDisciplina.map(disciplina => {
                const professor = professores.find(prof => prof.id === disciplina.professor_responsavel);
                return {
                    ...disciplina,
                    professor_responsavel: professor ? professor.username : 'Não atribuído'
                };
            })
            
            setDisiciplinaData(listDisciplinaProfessor);
        } catch (error) {
            console.error("Erro ao buscar disciplina: ", error);
        }
    }
    async function getProfessores() {
        try {
            const response = await api.get('/professor', {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            const listProfessor = response.data;
            setProfessorData(listProfessor);
        } catch (error) {
            console.error("Erro ao buscar professores: ", error);
        }
    }

    useEffect(() => {
        getProfessores();
    }, [])

    useEffect(() => {
        if (professorData.length > 0) {
            getDisciplina(professorData);
        }
    }, [professorData]);

    useEffect(() => {
        if (disciplinaData.length > 0) {
            getAmbientes(professorData, disciplinaData);
        }
    }, [disciplinaData]);
    
    // Definição das rotas
    let content, text;
    if(location.pathname.includes("home")){
        content = <Table typeURL="professor" listInput={listInputProfessor} data={professorData} columns={professorColumns} type="Professor" />
        text = <Title text="Professores" />
    } else if (location.pathname.includes("ambiente")) {
        content = <Table data={ambienteData} columns={ambienteColumns} type="Ambiente" />
        text = <Title text="Ambientes" />
    } else if (location.pathname.includes("disciplina")) {
        content = <Table data={disciplinaData} columns={disciplinaColumns} type="Disciplina" />
        text = <Title text="Disciplinas" />
    } else if (location.pathname.includes("atualizarProfessor")) {
        content = <FormsInputs listInput={listInputProfessor} method="PUT" />
        text = <Title text="Atualizar professor" />
    } else if (location.pathname.includes("atualizarAmbiente")) {
        content = <FormsInputs listInput={listInputAmbiente} method="PUT" />
        text = <Title text="Atualizar ambiente" />
    } else if (location.pathname.includes("atualizarDisciplina")) {
        content = <FormsInputs listInput={listInputDisciplina} method="PUT" />
        text = <Title text="Atualizar disciplina" />
    } else if (location.pathname.includes("cadastrarProfessor")) {
        content = <FormsInputs listInput={listInputProfessor} method="POST"/>
        text = <Title text="Cadastrar professor" />
    } else if (location.pathname.includes("cadastrarAmbiente")) {
        content = <FormsInputs listInput={listInputAmbiente} method="POST" title="Cadastrar ambiente"/>
        text = <Title text="Cadastrar ambiente" />
    } else if (location.pathname.includes("cadastrarDisciplina")) {
        content = <FormsInputs listInput={listInputDisciplina} method="POST" title="Cadastrar disciplina"/>
        text = <Title text="Cadastrar disciplina" />
    }

    return(
        <div className="globalLayout">
            <Header />
            <div className="content">
                <NavBar />
                {text}
                {content}
                <Outlet />
            </div>
            <Footer />
        </div>
    )
}

export default GlobalLayout;