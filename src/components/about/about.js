import React from 'react';
import './about.scss';
import { Link, Route } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import bio from '../../assets/bio';
import { Container, Lead, Display4 } from 'bootstrap-4-react';

export default function About() {
	return (
		<div className='about' id='About' style={styles.background}>
			<div className='about__body'>
				<div className='about__subHeader'>
					<Display4 style={styles.headerText}>{bio.header}</Display4>
				</div>
				<div className='about__divider--2'></div>
				<div>
					<img
						style={styles.profile}
						alt='profile'
						width='150px'
						src={require('../../assets/profile.png')}
					/>
				</div>

				<div className='about__text'>
					<Container fluid>
						<Lead style={styles.lead}>{bio.intro}</Lead>
						<Lead style={styles.lead}>{bio.intro0}</Lead>
						<Lead style={styles.lead}>{bio.intro1}</Lead>
						<Lead style={styles.lead}>{bio.intro5}</Lead>
						<Lead style={styles.lead}>{bio.intro4}</Lead>
						<Lead style={styles.lead}>{bio.intro3}</Lead>
						<div className='about__divider--2'></div>
						<div className='about__stats'>
							<Container fluid>
								<Lead style={styles.lead}>
									<span className='stats__header'>Full Name:</span>
									<span className='stats__text'>Chelsea Angelena Brown</span>
								</Lead>
								<Lead style={styles.lead}>
									<span className='stats__header'>Location:</span>
									<span className='stats__text'>
										Victoria, British Columbia, Canada
									</span>
								</Lead>
								<Lead style={styles.lead}>
									<span className='stats__header'>Credentials:</span>
									<span className='stats__text'>Web Development Diploma</span>
								</Lead>
								<Lead style={styles.lead}>
									<span className='stats__header'>School: </span>
									<span className='stats__text'>
										BrainStation, Vancouver, B.C. 2020
									</span>
								</Lead>
							</Container>
						</div>
						<div className='about__divider--3'></div>

						<Lead style={styles.lead} className='about__snippet'>
							I am available to work! I'm also interested in collaborating on
							projects. Feel free to email me, or get in touch using any of the
							links below
						</Lead>

						<div className='about__divider--3'></div>
						<div style={styles.nav} className='icon__div'>
							<Route
								path='linked'
								component={() => {
									window.location.href =
										'https://www.linkedin.com/in/chelsea-a-brown';
								}}
							/>
							<Link to='/linked' style={styles.nav}>
								<FontAwesomeIcon
									className='icon projects'
									style={styles.icon}
									size='5x'
									icon={['fab', 'linkedin-in']}
								/>
							</Link>
							<Route
								path='/github'
								component={() => {
									window.location.href = 'https://github.com/chelsea-angelena';
								}}
							/>
							<Link to='/github' style={styles.nav}>
								<FontAwesomeIcon
									className='icon projects'
									style={styles.icon}
									size='5x'
									icon={['fab', 'github']}
								/>
							</Link>
							<Route
								path='/myemail'
								component={() => {
									window.location.href = '@mailto:chelsea.angelena@gmail.com';
								}}
							/>
							<Link to='/myemail' style={styles.nav}>
								<FontAwesomeIcon
									className='icon projects'
									style={styles.icon}
									size='5x'
									icon={['far', 'envelope']}
								/>
							</Link>
						</div>
					</Container>
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
		marginRight: 24,
	},
	nav: {
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center',
		width: 250,
		marginTop: 16,
	},
	profile: {
		borderRadius: 150,
		marginTop: 32,
	},
	background: {
		backgroundColor: 'white',
	},
	aboutDiv: {
		maxWidth: '100%',
		borderColor: 'black',
		borderWidth: 2,
		border: 'solid',
		padding: 32,
		margin: 32,
	},
	lead: {
		fontFamily: 'Montserrat',
		fontSize: 16,
	},
	headerText: {
		fontFamily: 'Montserrat',
		fontSize: 48,
		maxWidth: '100%',
	},
};
