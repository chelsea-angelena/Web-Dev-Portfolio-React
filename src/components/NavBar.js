import React from 'react';
// import { Nav } from 'bootstrap-4-react';
// import '../styles/fontawesome';
import '../styles/custom.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';

export default function NavBar() {
	return (
		<>
			<Navbar collapseOnSelect expand='sm' bg='dark' variant='dark'>
				<Navbar.Brand href='#home'>App</Navbar.Brand>
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
					<Nav>
						<Nav.Link className='nav-link' href='#baz'>
							baz
						</Nav.Link>
						<Nav.Link href='#baz'>baz</Nav.Link>
						<Nav.Link href='#baz'>baz</Nav.Link>
						<Nav.Link href='#baz'>baz</Nav.Link>
						<Nav.Link href='#baz'>baz</Nav.Link>
						<Nav.Link eventKey={2} href='#qux'>
							qux
						</Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</Navbar>
		</>
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
	navStyles: {
		width: '100%',
		backgroundColor: 'rgba(0,0,0,.4)',
		borderBottomColor: 'white',
		borderBottomWidth: 2,
	},
	navBarIcons: {
		width: '100%',
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
