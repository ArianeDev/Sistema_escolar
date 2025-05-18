import { GraduationCap } from 'lucide-react'
import { Link } from 'react-router-dom';
import './style.sass';

export function Header(){

    const listHeader = [
        {
            "title": "Perfil",
            "endpoint": "/perfil"
        },

    ]

    return(
        <header>
            <div className="logo">
                <GraduationCap className='iconGradutionCap' />
                <h1 className='nameLogo'>EduManager</h1>
            </div>
            <nav className='navHeader'>
                <ul>
                {listHeader.map((item, key) => (
                    <li><Link to={item.endpoint} className='link'>{item.title}</Link></li>
                ))}
                </ul>
            </nav>
        </header>
    )
}