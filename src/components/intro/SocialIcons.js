import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';

export default function SocialIcons() {
	return (
		// <Container style={styles.container}>
		<>
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

					// id='iconID3'
				/>
			</Nav.Link>
			<Nav.Link
				href='https://github.com/chelsea-angelena'
				// style={styles.nav}
			>
				<FontAwesomeIcon
					style={styles.icon}
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
					style={styles.icon}
					size='3x'
					icon={['far', 'envelope']}
				/>
			</Nav.Link>
		</>
		// </Container>
	);
}
const styles = {
	icon: {
		borderWidth: 1,
		borderRadius: 4,
		width: 40,
		borderStyle: 'solid',
		height: 40,
		padding: 6,
		// backgroundColor: 'white',
		color: 'white',
		// marginBottom: 80,
	},
	container: {
		// marginBottom: 40,
		// alignItems: 'center',
		display: 'flex',
		flexDirection: 'row',

		// maxWidth: 250,
		justifyContent: 'flex-end',
	},
};
