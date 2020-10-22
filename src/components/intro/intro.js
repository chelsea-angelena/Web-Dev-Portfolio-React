import React from 'react';
import './intro.scss';
import '../../styles/fontawesome';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../../styles/fonts.scss';

import { Link } from 'react-scroll';
import '../nav.scss';

export default function Intro() {
	return (
		<>
			<div className='landing-div'>
				<div id='overlay'>
					{/* <div id="overlay2"> */}
					<div className='header__text--div'>
						<h1 className='header__text'>Chelsea Angelena Brown</h1>
						<div className='header__text--row-div'>
							<h2 className='header__text--row-2'>Full Stack</h2>
							{/* <h2 className='header__text--row-2'>Web and Mobile</h2>
							<h2 className='header__text--row-2'>Applications</h2> */}
							<h2 className='header__text--row-2'>Developer</h2>

							<div className='header__text--row'>
								<h3 className='header__second'>
									Mobile <span className='ellipse'>•</span> Web
									<span className='ellipse'>•</span>Desktop
								</h3>
							</div>
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
									to='Contact'
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

								<Link
									to='/resume'
									spy={true}
									smooth='true'
									className='projects'
									style={styles.anchorLink}
								>
									Resume
									<FontAwesomeIcon
										size='1x'
										// className='brand-icon'
										icon={['fas', 'angle-right']}
									/>
								</Link>
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
