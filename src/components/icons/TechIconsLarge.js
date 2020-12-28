import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function TechIconsLarge() {
	const icons = ['sass', 'node', 'react'];

	return (
		<div className='tech__icons'>
			{icons.map((icon, i) => (
				<Icon icon={icon} key={i} />
			))}
		</div>
	);
}

const Icon = ({ icon }) => {
	return (
		<div className='tech__icons'>
			<FontAwesomeIcon
				size='5x'
				className='brand-icon'
				color='white'
				icon={['fab', `${icon}`]}
			/>
		</div>
	);
};
