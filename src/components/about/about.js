import React from 'react';
import './about.scss';
import { Link } from 'react-router-dom';
// import './navbar.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import bio from '../../assets/bio';

export default function About() {
	return (
		<div className='about' id='About'>
			{/* <div className='about__border'>
				<div className='about__border--3'>
					<div className='about__border--2'>
						<div className='about__border--4'> */}
			<div className='about__pic--div'>
				<img
					className='about__pic'
					// src={require('../../assets/profilebw.jpg')}
					src={require('./profile.png')}
					alt=''
					width='100'
				></img>
			</div>
			<div className='about__body'>
				<div className='about__header'>
					<h4>{bio.subHeader}</h4>
				</div>
				<div className='about__divider'></div>
				<div className='about__subHeader'>
					<h3>{bio.header}</h3>
				</div>
				<div className='about__divider--2'></div>
				<div className='about__text'>
					<p>{bio.intro}</p>
					<div className='about__divider--2'></div>
					<div className='about__stats'>
						<h4>
							<span className='stats__header'>Full Name:</span>
							<span className='stats__text'>Chelsea Angelena Brown</span>
						</h4>
						<h4>
							<span className='stats__header'>Location:</span>
							<span className='stats__text'>
								Victoria, British Columbia, Canada
							</span>
						</h4>
						<h4>
							<span className='stats__header'>Credentials:</span>
							<span className='stats__text'>Web Development Diploma</span>
						</h4>
						<h4>
							<span className='stats__header'>School: </span>
							<span className='stats__text'>
								BrainStation, Vancouver, B.C. 2020
							</span>
						</h4>
					</div>
					<div className='about__divider--3'></div>
					<p className='about__snippet'>
						{' '}
						I am available to work! I'm also interested in collaberating on cool
						projects. Feel free to email me, or get in touch using any of the
						links below
					</p>
					<div className='about__divider--3'></div>
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
		// 			</div>
		// 		</div>
		// 	</div>
		// </div>
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
