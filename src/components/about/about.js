import React from 'react';
import './about.scss';
import { Link, Route } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import bio from '../../assets/bio';

export default function About() {
	return (
		<div className='about' id='About' style={styles.background}>
			<div className='about__body'>
				<div className='about__subHeader'>
					<h3>{bio.header}</h3>
				</div>
				<div className='about__divider--2'></div>
				<div>
					<img
						style={styles.profile}
						alt='profile'
						width='150px'
						src={require('../../assets/profile3.png')}
					/>
				</div>

				<div className='about__text'>
					<p>{bio.intro}</p>
					<p>{bio.intro0}</p>
					<p>{bio.intro5}</p>
					<p>{bio.intro1}</p>
					<p>{bio.intro2}</p>
					<p>{bio.intro3}</p>
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
						I am available to work! I'm also interested in collaberating on cool
						projects. Feel free to email me, or get in touch using any of the
						links below
					</p>
					<div className='about__divider--3'></div>
					<div style={styles.nav} className='icon__div'>
						<Route
							path='h'
							component={() => {
								window.location.href =
									'https://www.linkedin.com/in/chelsea-a-brown';
							}}
						/>
						<Link to='/h' style={styles.nav}>
							<FontAwesomeIcon
								className='icon'
								style={styles.icon}
								size='3x'
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
								className='icon'
								style={styles.icon}
								size='3x'
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
		justifyContent: 'flex-end',
		width: '100%',
		marginTop: 16,
	},
	profile: {
		borderRadius: 150,
		marginTop: 32,
	},
	background: {
		backgroundColor: '#FAFAFA',
	},
};
