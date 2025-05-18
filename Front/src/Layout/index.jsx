// Nesta parte será manuseados todos os componentes do site com seus dados

import { Outlet, useLocation } from "react-router-dom";
import { FormsInputs } from "../Componentes/Forms";
import { Header } from "../Componentes/Header";
import { NavBar } from "../Componentes/NavBar";
import { Table } from "../Componentes/Table";
import { Footer } from "../Componentes/Footer";
import { Title } from "../Componentes/Title";
import './style.sass'

const professorColumns = [
    { key: 'nome', label: 'Nome' },
    { key: 'email', label: 'Email' },
    { key: 'ni', label: 'NI' },
    { key: 'telefone', label: 'Telefone' },
    { key: 'Cargo', label: 'Cargo' },
    { key: 'dt_nascimento', label: 'Data nascimento' },
    { key: 'dt_contratacao', label: 'Data contratação' },
];
const ambienteColumns = [
    { key: 'nome', label: 'Nome' },
    { key: 'email', label: 'Email' },
    { key: 'ni', label: 'NI' },
    { key: 'telefone', label: 'Telefone' },
    { key: 'Cargo', label: 'Cargo' },
];

const professorData = [
    {
        nome: "Gabriela Alejandra Bergamine dos Santos",
        email: "naoseioquenaoseioque@gmail.com",
        ni: "45345/12",
        telefone: "(19) 12345-6789",
        dt_nascimento: "20/90/2025",
        dt_contratacao: "08/05/2025",
        Cargo: "Professor"
    },
];
const ambienteData = [
    {
        nome: "Ariane Oliveira Silva",
        email: "ariane@gmail.com",
        ni: "45345",
        telefone: "435345",
        Cargo: "Professor"
    },
    {
        nome: "Ariane Oliveira Silva",
        email: "ariane@gmail.com",
        ni: "45345",
        telefone: "435345",
        Cargo: "Professor"
    },
    {
        nome: "Ariane Oliveira Silva",
        email: "ariane@gmail.com",
        ni: "45345",
        telefone: "435345",
        Cargo: "Professor"
    },
    {
        nome: "Ariane Oliveira Silva",
        email: "ariane@gmail.com",
        ni: "45345",
        telefone: "435345",
        Cargo: "Professor"
    },
    {
        nome: "Ariane Oliveira Silva",
        email: "ariane@gmail.com",
        ni: "45345",
        telefone: "435345",
        Cargo: "Professor"
    },
    {
        nome: "Ariane Oliveira Silva",
        email: "ariane@gmail.com",
        ni: "45345",
        telefone: "435345",
        Cargo: "Professor"
    },
    {
        nome: "Ariane Oliveira Silva",
        email: "ariane@gmail.com",
        ni: "45345",
        telefone: "435345",
        Cargo: "Professor"
    },
    {
        nome: "Ariane Oliveira Silva",
        email: "ariane@gmail.com",
        ni: "45345",
        telefone: "435345",
        Cargo: "Professor"
    },
];

const listInputProfessor = [
    {
        "type": "text",
        "placeholder": "Atualize o primeiro nome...",
        "labelName": "Nome:"
    },
    {
        "type": "text",
        "placeholder": "Atualize o segundo nome...",
        "labelName": "Sobrenome:"
    },
    {
        "type": "email",
        "placeholder": "Atualize o email...",
        "labelName": "Email:"
    },
    {
        "type": "text",
        "placeholder": "Atualize o telefone...",
        "labelName": "Telefone:"
    },
    {
        "type": "text",
        "placeholder": "Atualize o cargo...",
        "labelName": "Cargo:"
    }
]
const listInputAmbiente = [
    {
        "type": "text",
        "placeholder": "Atualize o primeiro nome...",
        "labelName": "Nome:"
    },
]
const listInputDisciplina = [
    {
        "type": "text",
        "placeholder": "fggffg o primeiro nome...",
        "labelName": "Nome:"
    },
]

const GlobalLayout = () => {
    const location = useLocation();
    
    // Definição das rotas
    let content, text;
    if(location.pathname.includes("home")){
        content = <Table data={professorData} columns={professorColumns} type="Professor" />
        text = <Title text="Professores" />
    } else if (location.pathname.includes("ambiente")) {
        content = <Table data={ambienteData} columns={ambienteColumns} type="Ambiente" />
        text = <Title text="Ambientes" />
    } else if (location.pathname.includes("disciplina")) {
        content = <Table data={ambienteData} columns={ambienteColumns} type="Disciplina" />
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