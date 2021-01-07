import React from 'react';
import { Link } from 'react-scroll';
import { GoHome } from 'react-icons/go';

export default function HomeIcon() {
	return (
		<Link to='intro' spy={true} smooth='true'>
			<GoHome color='white' size={40} style={{ marginLeft: 24 }} />
		</Link>
	);
}
