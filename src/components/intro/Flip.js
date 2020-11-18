import React from 'react';
import './flip.scss';

export default function Flip() {
	return (
		<>
			<div className='flip-card'>
				<div className='flip-card-inner'>
					<div className='flip-card-front'>
						<img
							src={require('../../assets/planet.png')}
							alt='Avatar'
							style={{ width: 300, height: 300 }}
						/>
					</div>
					<div className='flip-card-back'>
						<h1>John Doe</h1>
						<p>Architect & Engineer</p>
						<p>We love that guy</p>
					</div>
				</div>
			</div>
		</>
	);
}
