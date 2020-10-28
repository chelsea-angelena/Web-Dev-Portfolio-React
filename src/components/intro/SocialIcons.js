import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';

export default function SocialIcons() {
	return (
		<Container style={styles.container}>
			<Nav.Link
				rel='noopener noreferrer'
				href='https://www.linkedin.com/in/chelsea-a-brown'
				active
				// style={styles.nav}
			>
				<FontAwesomeIcon
					style={styles.icon}
					size='3x'
					icon={['fab', 'linkedin-in']}
					className='nav__icon projects'
					// id='iconID3'
				/>
			</Nav.Link>
			<Nav.Link
				href='https://github.com/chelsea-angelena'
				// style={styles.nav}
			>
				<FontAwesomeIcon
					style={styles.icon}
					className='nav__icon projects'
					size='3x'
					icon={['fab', 'github']}
					// id='iconID2'
				/>
			</Nav.Link>
			<Nav.Link
				href='@mailto:chelsea.angelena@gmail.com'
				style={styles.nav}
				// id='iconID'
			>
				<FontAwesomeIcon
					className='nav__icon projects'
					style={styles.icon}
					size='3x'
					icon={['far', 'envelope']}
				/>
			</Nav.Link>
		</Container>
	);
}
const styles = {
	icon: {
		color: 'black',
		borderWidth: 3,
		borderRadius: 6,
		borderColor: 'black',
		borderStyle: 'solid',
		width: 50,
		height: 50,
		padding: 4,

		// marginBottom: 80,
	},
	container: {
		// marginBottom: 40,
		alignItems: 'center',
		display: 'flex',
		flexDirection: 'row',
		alignSelf: 'center',
		maxWidth: '100%',
		justifyContent: 'center',
	},
};
