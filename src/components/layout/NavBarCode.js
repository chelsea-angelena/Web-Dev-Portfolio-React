import React from 'react';
import { Navbar, Nav, Collapse } from 'bootstrap-4-react';
import { Link } from 'react-router-dom';
import { SocialIcons } from '../icons/Icons';

export default function NavigationBarCode() {
	return (
		<Navbar
			expand='sm'
			dark
			fluid='true'
			sticky
			fixed='top'
			style={{
				backgroundColor: 'rgba(0,0,0,1)',
				color: 'white',
				padding: 0,
				height: 75,
				margin: 0,
				zIndex: 15,
			}}
		>
			<Navbar.Toggler
				target='#navbarSupportedContent'
				style={{ marginLeft: 24 }}
			/>
			<Collapse
				navbar
				id='navbarSupportedContent'
				style={{
					backgroundColor: 'rgba(0,0,0,.1)',
					maxWidth: '100%',
					paddingTop: 16,
					paddingBottom: 16,
				}}
			>
				<Navbar.Nav
					mr='auto'
					style={{
						color: 'white',
						justifyContent: 'center',
						alignItems: 'center',
					}}
				>
					<Nav.Item className='navItem'>
						<Link path='/' to='/' className='draw link'>
							Home
						</Link>
					</Nav.Item>
					<Nav.Item className='navItem'>
						<Link to='/about' className='draw link'>
							About
						</Link>
					</Nav.Item>

					<Nav.Item className='navItem'>
						<Link to='/demo' className='draw link'>
							Demo
						</Link>
					</Nav.Item>
					<Nav.Item className='navItem'>
						<Link to='/projects' className='draw link'>
							Projects
						</Link>
					</Nav.Item>
					<Nav.Item className='navItem'>
						<Link to='/contact' className='draw link'>
							Contact
						</Link>
					</Nav.Item>
					<Nav.Item className='navItem'>
						<Link to='/resume' href='/resume' className='draw link'>
							Resume
						</Link>
					</Nav.Item>
					<Nav.Item className='navItem'>
						<Link to='/code' className='draw link'>
							Code
						</Link>
					</Nav.Item>
				</Navbar.Nav>
			</Collapse>
			<SocialIcons />
		</Navbar>
	);
}
