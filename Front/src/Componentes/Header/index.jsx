import { GraduationCap } from 'lucide-react'
import { Link } from 'react-router-dom';
import './style.sass';

export function Header(){

    const listHeader = [
        {
            "title": "Home",
            "endpoint": "/"
        },
        {
            "title": "Login",
            "endpoint": "/login"
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
                    <Link to={item.endpoint}><li>{item.title}</li></Link>
                ))}
                </ul>
            </nav>
        </header>
    )
}