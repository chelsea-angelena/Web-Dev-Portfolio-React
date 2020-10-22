import React from 'react';
import './intro.scss';
import '../../styles/fontawesome';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../../styles/fonts.scss';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-scroll';
import '../nav.scss';

export default function Intro() {
	return (
		<>
			<div className='landing-div'>
				<div id='overlay'>
					<div className='header__text--div'>
						<div className='headerTextBorder'>
							<h1 className='header__text'>Chelsea Angelena Brown</h1>

							<h2 className='header__text'>Full Stack Developer</h2>
						</div>
						<div className='header__text--row'>
							<h3 className='header__second'>
								MOBILE APPLICATIONS <span className='ellipse'>•</span> WEB
								DEVELOPMENT
							</h3>
						</div>
						<div className='tech__icons'>
							<p>
								<FontAwesomeIcon
									size='6x'
									className='brand-icon'
									icon={['fab', 'node']}
								/>
							</p>
							<p>
								<FontAwesomeIcon
									size='6x'
									className='brand-icon'
									icon={['fab', 'react']}
								/>
							</p>
							<p>
								<FontAwesomeIcon
									size='6x'
									className='brand-icon'
									icon={['fab', 'sass']}
								/>
							</p>
						</div>
						<div style={styles.rowLink}>
							<div style={styles.col1}>
								<Link
									to='projects'
									spy={true}
									smooth='true'
									className='projects'
									style={styles.anchorLink}
								>
									Projects
									<FontAwesomeIcon
										size='1x'
										// className='brand-icon'
										icon={['fas', 'angle-right']}
									/>
								</Link>

								<Link
									to='About'
									spy={true}
									smooth='true'
									className='projects'
									style={styles.anchorLink}
								>
									About
									<FontAwesomeIcon
										size='1x'
										// className='brand-icon'
										icon={['fas', 'angle-right']}
									/>
								</Link>
							</div>
							<div style={styles.col2}>
								<Link
									to='Footer'
									spy={true}
									smooth='true'
									className='projects'
									style={styles.anchorLink}
								>
									Contact
									<FontAwesomeIcon
										size='1x'
										// className='brand-icon'
										icon={['fas', 'angle-right']}
									/>
								</Link>
								<Nav.Link
									to='/resume'
									href='/resume'
									id='resumeLink'
									style={styles.anchorLink}
								>
									Resume
									<FontAwesomeIcon
										size='1x'
										// className='brand-icon'
										icon={['fas', 'angle-right']}
										style={{ marginLeft: 12 }}
									/>
								</Nav.Link>
							</div>
						</div>

					</div>
				</div>
			</div>
		</>
	);
}
const styles = {
	anchorLink: {
		flexDirection: 'row',
		justifyContent: 'space-evenly',
		width: 150,
		fontSize: 24,
		fontFamily: 'Montserrat',
		fontWeight: 300,
		borderWidth: 1,
		borderColor: 'white',
		borderRadius: 6,
		border: 'solid',
		padding: 8,
		marginTop: 24,
		cursor: 'pointer',
	},
	rowLink: {
		display: 'flex',
		flexDirection: 'row',
		marginRight: 24,
	},
	col1: {
		marginRight: 24,
	},
};
