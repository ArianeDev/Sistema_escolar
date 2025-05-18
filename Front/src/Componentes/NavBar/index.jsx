import { PanelMenu } from 'primereact/panelmenu';
import { useNavigate } from 'react-router-dom';
import './style.sass'

export function NavBar() {
    const navigate = useNavigate();

    const items = [
        {
            label: 'Ambientes',
            icon: 'pi pi-file',
            items: [
                {
                    label: 'Cadastrar',
                    command: () => navigate('/cadastrarAmbiente')
                },
                {
                    label: 'Visualizar',
                    command: () => navigate('/ambiente')
                }
            ]
        },
        {
            label: 'Disciplina',
            icon: 'pi pi-file',
            items: [
                {
                    label: 'Cadastrar',
                    command: () => navigate('/cadastrarDisciplina')
                },
                {
                    label: 'Visualizar',
                    command: () => navigate('/disciplina')
                }
            ]
        },
        {
            label: 'Professor',
            icon: 'pi pi-file',
            items: [
                {
                    label: 'Cadastrar',
                    command: () => navigate('/cadastrarProfessor')
                },
                {
                    label: 'Visualizar',
                    command: () => navigate('/home')
                }
            ]
        },
    ];

    return (
        <div className='navBar'>
            <PanelMenu model={items} />
        </div>
    )
}