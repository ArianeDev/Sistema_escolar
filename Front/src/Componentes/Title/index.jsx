import { CirclePlus } from 'lucide-react';
import './style.sass';

export function Title({ text }){
	return(
		<div className='containerTopPages'>
			<h2>{text}</h2>
			<div className="add">
				<CirclePlus />
				<p>Adicionar</p>
			</div>
		</div>
	)
}