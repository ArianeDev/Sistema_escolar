import { PanelMenu } from 'primereact/panelmenu';
import { useNavigate } from 'react-router-dom';
import './style.sass'

export function NavBar() {
    const navigate = useNavigate();
    const cargo = localStorage.getItem('cargo');

    const itemsG = [
        {
            label: 'Ambientes',
            icon: 'pi pi-file',
            items: [
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
                    label: 'Visualizar',
                    command: () => navigate('/Professor')
                }
            ]
        },
    ];

    const itemsP = [
        {
            label: 'Ambientes',
            icon: 'pi pi-file',
            items: [
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
                    label: 'Visualizar',
                    command: () => navigate('/disciplina')
                }
            ]
        },
    ];

    let items = '';

    if (cargo === 'G'){
        items = itemsG;
    } else{
        items = itemsP;
    }

    return (
        <div className='navBar'>
            <PanelMenu model={items} />
        </div>
    )
}