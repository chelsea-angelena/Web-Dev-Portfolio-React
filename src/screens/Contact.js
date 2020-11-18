import React from 'react';
import './contact.scss';
import { Nav } from 'bootstrap-4-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import contact from './contactData';
import { Jumbotron, Container } from 'bootstrap-4-react';

export default function ContactSection() {
	return (
		<Jumbotron id='contact' fluid className='jumbo'>
			<div id='overlay'>
				<Container
					fluid
					className='contact__body'
					style={{
						display: 'flex',
						flexDirection: 'column',
						alignItems: 'center',
					}}
				>
					<div style={styles.title}>{contact.title}</div>
					<div style={styles.blurb}>{contact.blurb}</div>
					<div style={styles.blurb}>{contact.emailBlurb}</div>
					<div
						style={{
							overflow: 'hidden',
							fontFamily: 'Montserrat',
							color: '#ffffff',
							fontSize: '1.25rem',
						}}
					>
						{contact.email}
					</div>
				</Container>
				<div style={styles.navBarIcons}>
					<Nav.Link
						rel='noopener noreferrer'
						href='https://www.linkedin.com/in/chelsea-a-brown'
						active
						style={styles.nav}
						className='nav__iconLink'
					>
						<FontAwesomeIcon
							style={styles.icon}
							size='3x'
							icon={['fab', 'linkedin-in']}
							// className='nav__icon'
							id='iconID3'
						/>
					</Nav.Link>
					<Nav.Link
						href='https://github.com/chelsea-angelena'
						style={styles.nav}
						className='nav__iconLink'
					>
						<FontAwesomeIcon
							// className='nav__icon'
							style={styles.icon}
							size='3x'
							icon={['fab', 'github']}
							id='iconID2'
						/>
					</Nav.Link>
					<Nav.Link
						href='@mailto:chelsea.angelena@gmail.com'
						style={styles.nav}
						className='nav__iconLink'
						id='iconID'
					>
						<FontAwesomeIcon
							// className='nav__icon'
							style={styles.icon}
							size='3x'
							icon={['far', 'envelope']}
						/>
					</Nav.Link>
				</div>
			</div>
		</Jumbotron>
		// </Container>
	);
}

const styles = {
	icon: {
		width: 35,
	},
	email: {
		fontFamily: 'Montserrat',
		color: 'white',
		paddingBottom: 16,
	},
	form: {
		flexDirection: 'column',
	},

	blurb: {
		paddingLeft: 16,
		paddingRight: 16,
		paddingTop: 24,
		textAlign: 'center',
		alignSelf: 'center',
		justifyContent: 'center',
		alignItems: 'center',
		fontFamily: 'Montserrat',
		color: '#ffffff',
		fontSize: '1.25rem',
		display: 'flex',
		flexWrap: 'wrap',
	},
	title: {
		fontFamily: 'Abril Fatface',
		fontWeight: 'bold',
		fontSize: 54,
		color: '#ffffff',
		alignSelf: 'center',
		width: '100%',
		justifyContent: 'center',
		alignItems: 'center',
		textAlign: 'center',
		paddingTop: 42,
	},
	navBarIcons: {
		display: 'flex',
		justifyContent: 'space evenly',
		alignSelf: 'center',
		maxWidth: '100%',
		overflow: 'hidden',
		paddingBottom: 40,
	},
	nav: { margin: 12 },
};
