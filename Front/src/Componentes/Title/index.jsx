import { CirclePlus } from 'lucide-react';
import './style.sass';

export function Title({ text }){
	return(
		<div className='containerTopPages'>
			<h2>{text}</h2>
			<button className="add">
				<CirclePlus className='iconAdd'/>
				<p>Adicionar</p>
			</button>
		</div>
	)
}