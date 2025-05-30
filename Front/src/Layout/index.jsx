// Nesta parte será manuseados todos os componentes do site com seus dados

import { Outlet, useLocation } from "react-router-dom";
import { FormsInputs } from "../Componentes/Forms";
import { Header } from "../Componentes/Header";
import { NavBar } from "../Componentes/NavBar";
import { Table } from "../Componentes/Table";
import { Footer } from "../Componentes/Footer";
import { Title } from "../Componentes/Title";
import { Context } from "../Componentes/Context";
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
    const cargo = localStorage.getItem('cargo');
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
    if(location.pathname.includes("disciplina")) {
        content = <Context typeURL="disciplina" data={disciplinaData} columns={disciplinaColumns} type="Disciplina" />
    } else if (location.pathname.includes("home")) {
        content = <Context typeURL="ambiente" data={ambienteData} columns={ambienteColumns} type="Ambiente" />
    } else if (location.pathname.includes("professor")) {
        {cargo === 'G' && (
            content = <Context typeURL="professor" data={professorData} columns={professorColumns} type="Professor" />
        )}
    }

    return(
        <div className="globalLayout">
            <Header />
            <div className="content">
                <NavBar />
                {content}
                <Outlet />
            </div>
            <Footer />
        </div>
    )
}

export default GlobalLayout;