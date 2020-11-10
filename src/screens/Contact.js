import React from 'react';
import './contact.scss';
import { Nav } from 'bootstrap-4-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import contact from './contactData';
import { Jumbotron, Container } from 'bootstrap-4-react';

export default function ContactSection() {
	return (
		<Jumbotron
			fluid
			style={{
				backgroundImage: `url('https://images.unsplash.com/photo-1499946981954-e7f4b234d7fa?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80')`,
				backgroundRepeat: 'no-repeat',
				backgroundSize: 'cover',
				display: 'flex',
				flexDirection: 'column',
				alignSelf: 'center',
				alignItems: 'center',
				justifyContent: 'center',
			}}
		>
			<Container style={styles.innerView} id='contactOverlay'>
				<div style={styles.title}>{contact.title}</div>
				<div style={styles.blurb}>{contact.blurb}</div>
				<div style={styles.email}>{contact.emailBlurb}</div>
				<div style={styles.email}>{contact.email}</div>
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
			</Container>
		</Jumbotron>
	);
}

const styles = {
	view: {
		width: '100%',
		backgroundColor: 'hsl(0, 0%, 100%)',
		marginTop: 40,
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		alignSelf: 'center',
		textAlign: 'center',
		paddingTop: 64,
		paddingBottom: 64,
	},
	innerView: {
		width: '100%',
		height: '100%',
		backgroundColor: 'rgba(0,0,0,.4)',
		paddingTop: 64,
		paddingBottom: 64,
		margin: 0,
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
	icon: { width: 35 },
	email: {
		fontFamily: 'Montserrat',
		color: 'white',
		paddingBottom: 16,
	},
	form: {
		flexDirection: 'column',
	},
};
