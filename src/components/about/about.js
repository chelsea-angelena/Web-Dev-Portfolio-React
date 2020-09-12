import React from 'react';
import './about.scss';
import { Link } from 'react-router-dom';
// import './navbar.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const profilePic = require('./profile.png');

export default function About() {
	return (
		<div className='about'>
			<div className='about__pic'>
				<img className='about__pic' src={profilePic} alt='' width='100'></img>
			</div>
			<div className='about__body'>
				<div className='about__header'>
					<h4>My name is Chelsea</h4>
				</div>
				<div className='about__divider'></div>
				<div className='about__subHeader'>
					<h3>I am a full stack developer maybe ?</h3>
				</div>
				<div className='about__divider--2'></div>
				<div className='about__text'>
					<p>
						I am a full stack developer maybe ?I am a full stack developer maybe
						?I am a full stack developer maybe ?I am a full stack developer
						maybe ?I am a full stack developer maybe ?I am a full stack
						developer maybe ?I am a full stack developer maybe ?I am a full
						stack developer maybe ?I am a full stack developer maybe ?I am a
						full stack developer maybe ?I am a full stack developer maybe ?I am
						a full stack developer maybe ?I am a full stack developer maybe ?I
						am a full stack developer maybe ?I am a full stack developer maybe
						?vI am a full stack developer maybe ?I am a full stack developer
						maybe ?I am a full stack developer maybe ?I am a full stack
						developer maybe ?I am a full stack developer maybe ?
					</p>
					<div className='about__divider--2'></div>
					<div className='about__stats'>
						<h3>Full Name:</h3>
						<h4>Chelsea Angelena Brown</h4>
						<h3>Location:</h3>
						<h4>Victoria, British Columbia, Canada</h4>
						<h3>Credentials:</h3>
						<h4>Web Development Diploma</h4>
						<h3>School:</h3>
						<h4>BrainStation, Vancouver, B.C. 2020</h4>
					</div>
					<div className='about__divider--2'></div>
					<p className='about__snippet'>
						{' '}
						I am available to work! I'm also interested in collaberating on cool
						projects. Feel free to email me, or get in touch using any of the
						links below
					</p>
					<div className='about__divider--2'></div>
					<div style={styles.nav} className='icon__div'>
						<Link
							rel='noopener noreferrer'
							href='https://www.linkedin.com/in/chelsea-a-brown'
							active
							style={styles.nav}
						>
							<FontAwesomeIcon
								className='icon'
								style={styles.icon}
								size='3x'
								icon={['fab', 'linkedin-in']}
							/>
						</Link>
						<Link href='https://github.com/chelsea-angelena' style={styles.nav}>
							<FontAwesomeIcon
								className='icon'
								style={styles.icon}
								size='3x'
								icon={['fab', 'github']}
							/>
						</Link>
						<Link href='@mailto:chelsea.angelena@gmail.com' style={styles.nav}>
							<FontAwesomeIcon
								className='icon'
								style={styles.icon}
								size='3x'
								icon={['far', 'envelope']}
							/>
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
}
const styles = {
	icon: {
		color: 'black',
		borderWidth: 3,
		borderStyle: 'solid',
		borderColor: 'black',
		padding: 4,
		borderRadius: 6,
	},
	nav: {
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center',
		width: '100%',
		marginTop: 16,
	},
};
