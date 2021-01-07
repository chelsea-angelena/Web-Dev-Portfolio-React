import React from 'react';
import { Nav } from 'bootstrap-4-react';
import { Link } from 'react-router-dom';

export default function ResumeNav() {
	return (
		<Nav.Item className='navItem'>
			<Link to='/resume' href='/resume' className='draw link'>
				Resume
			</Link>
		</Nav.Item>
	);
}
