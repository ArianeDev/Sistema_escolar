import { useEffect } from 'react';
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
            <h1>Escola da DS15</h1>
            <nav>
                <ul>
                {listHeader.map((item, key) => (
                    <Link to={item.endpoint}><li>{item.title}</li></Link>
                ))}
                </ul>
            </nav>
        </header>
    )
}