import React from 'react';
import './contact.scss';
import ContactInfo from './ContactInfo';
import { Nav } from 'bootstrap-4-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../components/footer/footer.scss';

const contact = {
	title: 'Get In Touch',
	blurb:
		"If you have any questions about my page or projects, or, if you're interested in working together, please feel free to contact me. I can be reached via email, linkedIn, or github. Questions and constructive critism are also welcomed! ",
	emailBlurb: 'Email me at:',
	email: 'chelsea.angelena@gmail.com',
};

export default function ContactSection() {
	return (
		<div style={styles.view} className='ContactForm'>
			<div style={styles.innerView} className='contactOverlay'>
				<div style={styles.title}>{contact.title}</div>
				<div style={styles.blurb}>{contact.blurb}</div>
				<div style={styles.email}>{contact.emailBlurb}</div>
				<div style={styles.email}>{contact.email}</div>

				<ContactInfo />
				<div style={styles.navBarIcons} className='nav' id='Footer'>
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
							className='nav__icon'
							id='iconID3'
						/>
					</Nav.Link>
					<Nav.Link
						href='https://github.com/chelsea-angelena'
						style={styles.nav}
						className='nav__iconLink'
					>
						<FontAwesomeIcon
							className='nav__icon'
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
							className='nav__icon'
							style={styles.icon}
							size='3x'
							icon={['far', 'envelope']}
						/>
					</Nav.Link>
				</div>
			</div>
		</div>
	);
}

const styles = {
	view: {
		width: '100%',
		backgroundColor: 'hsl(0, 0%, 100%)',
		marginTop: 40,
		// marginBottom: 40,
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		alignSelf: 'center',
		textAlign: 'center',
		paddingTop: 64,
		paddingBottom: 64,
	},
	innerView: {
		width: '95%',
		paddingTop: 32,
		paddingBottom: 32,
		display: 'flex',
		alignSelf: 'center',
		alignItems: 'center',
		color: 'white',
		flexDirection: 'column',
		paddingLeft: 12,
		paddingRight: 12,
	},
	title: {
		fontFamily: 'Montserrat',
		fontWeight: '500',
		fontSize: 40,
		color: 'white',
		paddingTop: 24,
	},
	blurb: {
		fontFamily: 'Montserrat',
		lineHeight: '2rem',
		paddingLeft: 64,
		paddingRight: 64,
		paddingTop: 32,
		textAlign: 'center',
		color: 'white',
		fontSize: 18,
		paddingBottom: 32,
	},
	email: {
		fontFamily: 'Montserrat',
		color: 'white',
		paddingBottom: 16,
	},
	form: {
		flexDirection: 'column',
	},
};
