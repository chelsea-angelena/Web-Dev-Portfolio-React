import React from 'react';
import '../styles/custom.scss';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-scroll';
import './nav.scss';

export default function NavBar() {
	return (
		<Navbar
			className='navbar'
			collapseOnSelect
			expand='sm'
			bg='dark'
			variant='dark'
			fixed='top'
			style={styles.nav}
		>
			<Navbar.Brand>
				<Link to='overlay' className='draw nav-link' spy={true} smooth='true'>
					Home
				</Link>
			</Navbar.Brand>
			<Navbar.Toggle />
			<Navbar.Collapse id='basic-navbar-nav' bg='dark'>
				<Nav bg='dark' className='mr-auto'></Nav>
				<Nav
					bg='dark'
					style={{
						display: 'flex',
						listStyle: 'none',
						justifyContent: 'space-around',
						backgroundColor: 'hsl(10%, 10%, 0%)',
						cursor: 'default',
					}}
				>
					<Link
						bg='dark'
						to='projects'
						spy={true}
						smooth='true'
						className='nav-link draw'
						style={{ backgroundColor: 'hsl(10%, 10%, 0%)' }}
					>
						Projects
					</Link>

					<Link to='About' spy={true} smooth='true' className='nav-link draw'>
						About
					</Link>

					<Link className='draw nav-link' to='Footer' spy={true} smooth='true'>
						Contact
					</Link>
					<Nav.Link
						className='nav-link draw'
						eventKey={2}
						to='/resume'
						href='/resume'
					>
						Resume
					</Nav.Link>
				</Nav>
			</Navbar.Collapse>
		</Navbar>
	);
}

const styles = {
	nav: {
		maxWidth: '100%',
		height: 75,
	},
	navStyles: {
		maxWidth: '100%',
		// backgroundColor: 'rgba(0,0,0,.4)',
		borderBottomColor: 'white',
		borderBottomWidth: 2,
	},
	navBarIcons: {
		maxWidth: '100%',
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'center',
	},
	icon: {
		color: 'white',
		borderWidth: 2,
		borderColor: 'white',
		borderStyle: 'solid',
		width: 50,
		padding: 4,
		borderRadius: 6,
		display: 'inline-block',
		marginTop: 24,
		// marginBottom: 24,
	},
};
