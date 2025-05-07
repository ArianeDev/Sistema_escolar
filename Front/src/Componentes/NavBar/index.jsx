import { PanelMenu } from 'primereact/panelmenu';
import './style.sass'
export function NavBar() {
    const items = [
        {
            label: 'Professor',
            icon: 'pi pi-file',
            items: [
                {
                    label: 'Cadastrar',
                },
                {
                    label: 'Visualizar',
                }
            ]
        },
        {
            label: 'Disciplina',
            icon: 'pi pi-file',
            items: [
                {
                    label: 'Cadastrar',
                },
                {
                    label: 'Visualizar',
                }
            ]
        },
        {
            label: 'Ambientes',
            icon: 'pi pi-file',
            items: [
                {
                    label: 'Cadastrar',
                },
                {
                    label: 'Visualizar',
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
        