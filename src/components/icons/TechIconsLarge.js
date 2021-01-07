import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function TechIconsLarge() {
	const icons = [
		{ i: 1, name: 'sass' },
		{ i: 2, name: 'node' },
		{ i: 3, name: 'react' },
	];

	return (
		<div className='tech__icons'>
			{icons.map((icon) => (
				<Icon icon={icon.name} key={icon.i} />
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
