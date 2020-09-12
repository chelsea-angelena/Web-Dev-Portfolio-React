import React from 'react';
import { Nav } from 'bootstrap-4-react';
// import '../styles/fontawesome';
import './navbar.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const NavBar = () => {
	return (
		<Nav as='nav' style={styles.navStyles}>
			<div style={styles.navBarIcons} className='nav'>
				<Nav.Link
					rel='noopener noreferrer'
					href='https://www.linkedin.com/in/chelsea-a-brown'
					active
					style={styles.nav}
				>
					<FontAwesomeIcon
						style={styles.icon}
						size='3x'
						icon={['fab', 'linkedin-in']}
					/>
				</Nav.Link>
				<Nav.Link href='https://github.com/chelsea-angelena' style={styles.nav}>
					<FontAwesomeIcon
						style={styles.icon}
						size='3x'
						icon={['fab', 'github']}
					/>
				</Nav.Link>
				<Nav.Link href='@mailto:chelsea.angelena@gmail.com' style={styles.nav}>
					<FontAwesomeIcon
						style={styles.icon}
						size='3x'
						icon={['far', 'envelope']}
					/>
				</Nav.Link>
			</div>
		</Nav>
	);
};

export default NavBar;

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
