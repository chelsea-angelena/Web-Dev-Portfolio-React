import React from 'react';
import '../styles/custom.scss';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-scroll';
import './nav.scss';

export default function MyNavBar() {
	return (
		<Container fluid style={{ maxWidth: '100%' }}>
			<Navbar
				// className='navbar'
				collapseOnSelect
				expand='sm'
				variant='light'
				fixed='top'
				style={styles.nav}
			>
				<Navbar.Brand>
					<Link to='overlay' className='draw nav-link' spy={true} smooth='true'>
						Home
					</Link>
				</Navbar.Brand>
				{/* <Navbar.Toggle />
				<Navbar.Collapse id='basic-navbar-nav'> */}
					{/* <Nav className='mr-auto'></Nav> */}
					{/* <Nav
						// bg='dark'
						style={{
							display: 'flex',
							listStyle: 'none',
							justifyContent: 'space-around',
							maxWidth: '100%',
							// backgroundColor: 'hsl(10%, 10%, 0%)',
							cursor: 'default',
						}}
					> */}
						{/* <Link
							bg='dark'
							to='projects'
							spy={true}
							smooth='true'
							className='nav-link draw'
							style={{ color: 'black', backgroundColor: 'hsl(10%, 10%, 0%)' }}
						>
							Projects
						</Link>

						<Link
							to='About'
							spy={true}
							smooth='true'
							className='nav-link draw'
							style={{ color: 'black' }}
						>
							About
						</Link>

						<Link
							className='draw nav-link'
							to='Footer'
							spy={true}
							smooth='true'
							style={{ color: 'black' }}
						>
							Contact
						</Link>
						<Nav.Link
							className='nav-link draw'
							eventKey={2}
							to='/resume'
							href='/resume'
							style={{ color: 'black' }}
						>
							Resume
						</Nav.Link>
					</Nav>
				</Navbar.Collapse> */}
			</Navbar>
		</Container>
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
