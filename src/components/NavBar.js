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
