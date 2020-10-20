import React from 'react';
// import { Nav } from 'bootstrap-4-react';
// import '../styles/fontawesome';
import '../styles/custom.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Resume from '../screens/resume/resume';
import { Link } from 'react-scroll';
// import '../styles/custom.scss';
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
			{/* <Navbar.Brand href='#home'>App</Navbar.Brand> */}
			<Navbar.Toggle />
			<Navbar.Collapse>
				<Nav className='mr-auto'>
					{/* <NavDropdown title='Dropdown' id='collasible-nav-dropdown'>
							<NavDropdown.Item href='#action/1'>action 1</NavDropdown.Item>
							<NavDropdown.Item href='#action/2'>action 2</NavDropdown.Item>
							<NavDropdown.Item href='#action/3'>action 3</NavDropdown.Item>
							<NavDropdown.Divider />
							<NavDropdown.Item href='#action/4'>action 4</NavDropdown.Item>
						</NavDropdown> */}
				</Nav>
				<Nav
					style={{
						display: 'flex',
						listStyle: 'none',
						justifyContent: 'space-around',
					}}
				>
					<Nav.Link className='nav-link'>
						<Link className='draw' to='overlay' spy={true} smooth={true}>
							Home
						</Link>
					</Nav.Link>
					<Nav.Link className='nav-link'>
						<Link className='draw' to='Projects' spy={true} smooth={true}>
							Projects
						</Link>
					</Nav.Link>
					<Nav.Link className='nav-link'>
						<Link className='draw' to='About' spy={true} smooth={true}>
							About
						</Link>
					</Nav.Link>
					<Nav.Link className='nav-link'>
						<Link className='draw' to='Footer' spy={true} smooth={true}>
							Contact
						</Link>
					</Nav.Link>
					<Nav.Link
						className='draw'
						eventKey={2}
						href='/resume'
						component={Resume}
					>
						Resume
					</Nav.Link>
				</Nav>
			</Navbar.Collapse>
		</Navbar>
	);
}

// const NavBar = () => {
// 	return (
// 		<Nav as='nav' style={styles.navStyles}>
// 			<div style={styles.navBarIcons} className='nav'>
// 				<Nav.Link
// 					rel='noopener noreferrer'
// 					href='https://www.linkedin.com/in/chelsea-a-brown'
// 					active
// 					style={styles.nav}
// 				>
// 					<FontAwesomeIcon
// 						style={styles.icon}
// 						size='3x'
// 						icon={['fab', 'linkedin-in']}
// 					/>
// 				</Nav.Link>
// 				<Nav.Link href='https://github.com/chelsea-angelena' style={styles.nav}>
// 					<FontAwesomeIcon
// 						style={styles.icon}
// 						size='3x'
// 						icon={['fab', 'github']}
// 					/>
// 				</Nav.Link>
// 				<Nav.Link href='@mailto:chelsea.angelena@gmail.com' style={styles.nav}>
// 					<FontAwesomeIcon
// 						style={styles.icon}
// 						size='3x'
// 						icon={['far', 'envelope']}
// 					/>
// 				</Nav.Link>
// 			</div>
// 		</Nav>
// 	);
// };

const styles = {
	nav: {
		maxWidth: '100%',
		height: 75,
	},
	navStyles: {
		maxWidth: '100%',
		backgroundColor: 'rgba(0,0,0,.4)',
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
		marginBottom: 24,
	},
};
