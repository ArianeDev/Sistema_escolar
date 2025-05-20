import { GraduationCap } from 'lucide-react';
import { Github } from 'lucide-react';
import { Linkedin } from 'lucide-react';
import './style.sass';

export function Footer(){
	return(
		<footer>
			<div className="part1">
				<div className="logo">
					<GraduationCap className='iconGradutionCap' />
					<h1 className='nameLogo'>EduManager</h1>
				</div>
				<div className="iconsFooter">
					<a href="https://github.com/ArianeDev" target='_blank' rel='noopener noreferrer'>
						<span title='GitHub'>
							<Github className='icons'/>
						</span>
					</a>
					<a href="https://www.linkedin.com/in/ariane-silva-a21039260/" target='_blank' rel='noopener noreferrer'>
						<span title='Linkedin'>
							<Linkedin className='icons'/>
						</span>
					</a>
				</div>
			</div>
			<div className="part2">
				<p>©2025 Ariane Oliveira Silva - Todos os direitos reservados.</p>
			</div>
		</footer>
	)
}