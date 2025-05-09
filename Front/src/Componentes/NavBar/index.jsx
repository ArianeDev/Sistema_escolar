import { PanelMenu } from 'primereact/panelmenu';
import { useNavigate } from 'react-router-dom';
import './style.sass'

export function NavBar() {
    const navigate = useNavigate();

    const items = [
        {
            label: 'Professor',
            icon: 'pi pi-file',
            items: [
                {
                    label: 'Cadastrar',
                    command: () => navigate('/atualizar')
                },
                {
                    label: 'Visualizar',
                    command: () => navigate('/home')
                }
            ]
        },
        {
            label: 'Disciplina',
            icon: 'pi pi-file',
            items: [
                {
                    label: 'Cadastrar',
                    command: () => navigate('/atualizar')
                },
                {
                    label: 'Visualizar',
                    command: () => navigate('/home')
                }
            ]
        },
        {
            label: 'Ambientes',
            icon: 'pi pi-file',
            items: [
                {
                    label: 'Cadastrar',
                    command: () => navigate('/atualizar')
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