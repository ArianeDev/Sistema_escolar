import { GraduationCap } from 'lucide-react'
import './style.sass';

export function Header(){
    return(
        <header>
            <div className="logo">
                <GraduationCap className='iconGradutionCap' />
                <h1 className='nameLogo'>EduManager</h1>
            </div>
        </header>
    )
}