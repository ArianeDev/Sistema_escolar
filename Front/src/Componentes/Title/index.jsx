import { CirclePlus } from 'lucide-react';
import { Modal } from '../Modal';
import './style.sass';

export function Title({ text, typeURL, openModal }){
	const cargo = localStorage.getItem('cargo');
	
	return(
		<div className='containerTopPages'>
			<h2>{text}</h2>
			{cargo === 'G' && (
				<button className="add" onClick={openModal}>
					<CirclePlus className='iconAdd'/>
					<p>Adicionar</p>
				</button>
			)}
		</div>
	)
}