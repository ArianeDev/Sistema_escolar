import './style.sass'
import { UserPen } from 'lucide-react';
import { Trash2 } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Table({onClose}){


    const list = [
        {
            "username": "Ariane Oliveira Silva",
            "nome": "Ariane Oliveira Silva",
            "email": "silvaarianeoliveira2@gmail.com",
            "ni": "45345",
            "telefone": "(19) 12345-6789",
            "dt_nascimento": "20/05/2006",
            "dt_contratacao": "08/05/2025",
            "Cargo": "Professor"
        },
        {
            "username": "Ariane",
            "nome": "Gabriela Ajandra Bergamine dos Santos",
            "email": "ariane@gmail.com",
            "ni": "45345",
            "telefone": "435345",
            "dt_nascimento": "20/05/2006",
            "dt_contratacao": "08/05/2025",
            "Cargo": "Professor"
        },
        {
            "username": "Ariane",
            "nome": "Ariane",
            "email": "ariane@gmail.com",
            "ni": "45345",
            "telefone": "435345",
            "dt_nascimento": "20/05/2006",
            "dt_contratacao": "08/05/2025",
            "Cargo": "Professor"
        }
    ]

    return(
        <table>
            <thead>
                <tr>
                    <th>Nome</th>
                    <th>Email</th>
                    <th>NI</th>
                    <th>Telefone</th>
                    <th>Cargo</th>
                    <th>Data nascimento</th>
                    <th>Data contratação</th>
                    <th className='actionData'>Ações</th>
                </tr>
            </thead>
            <tbody>
                {list.map((item, key) => (
                    <tr key={key}>
                        <td>{item.nome}</td>
                        <td>{item.email}</td>
                        <td className='itensTable'>{item.ni}</td>
                        <td className='itensTable'>{item.telefone}</td>
                        <td className='itensTable'>{item.Cargo}</td>
                        <td className='itensTable'>{item.dt_nascimento}</td>
                        <td className='itensTable'>{item.dt_contratacao}</td>
                        <td className='icons'>
                            <Trash2 className='trash'/>
                            <Link to="/atualizar"><UserPen className='userPen'/></Link>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}