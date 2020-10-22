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
							<h2 className='header__text--row-2'>Web and Mobile</h2>
							<h2 className='header__text--row-2'>Applications</h2>
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
						<Link to='projects' spy={true} smooth='true' className='projects'>
							Projects
							<FontAwesomeIcon
								size='3x'
								// className='brand-icon'
								icon={['fas', 'angle-down']}
							/>
							{/* <div>
							<IconsRow />
						</div> */}
						</Link>
					</div>
				</div>
			</div>
		</>
	);
}
