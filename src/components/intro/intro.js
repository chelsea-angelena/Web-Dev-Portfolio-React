import React from 'react';
import './intro.scss';
import '../../styles/fontawesome';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../../styles/fonts.scss';

const intro = {
	blurb: '',

	blurb2: 'Interactive Applications and Responsive Design',
};

export default function Intro() {
	return (
		<div className='landing-div'>
			<div id='overlay'>
				{/* <div id="overlay2"> */}
				<div className='header__text--div'>
					<h1 className='header__text'>Chelsea Angelena Brown</h1>
					<h1 className='header__text--row-2'>Full Stack</h1>
					<h2 className='header__text--row-2'>Web and Mobile</h2>
					<h2 className='header__text--row-2'>Applications</h2>
					<h2 className='header__text--row-2'>Developer</h2>

					<div className='header__text--row'>
						<h3 className='header__second'>
							Mobile <span className='ellipse'>•</span> Web
							<span className='ellipse'>•</span>Desktop
						</h3>
					</div>
					<div className='tech__icons'>
						<p>
							<FontAwesomeIcon
								size='3x'
								className='brand-icon'
								icon={['fab', 'react']}
							/>
						</p>
						<p>
							<FontAwesomeIcon
								size='3x'
								className='brand-icon'
								icon={['fab', 'node']}
							/>
						</p>
						<p>
							<FontAwesomeIcon
								size='3x'
								className='brand-icon'
								icon={['fab', 'js-square']}
							/>
						</p>
						<p>
							<FontAwesomeIcon
								size='3x'
								className='brand-icon'
								icon={['fab', 'html5']}
							/>
						</p>
						<p>
							<FontAwesomeIcon
								size='3x'
								className='brand-icon'
								icon={['fab', 'css3']}
							/>
						</p>
						<p>
							<FontAwesomeIcon
								size='3x'
								className='brand-icon'
								icon={['fab', 'sass']}
							/>
						</p>
						<p>
							<FontAwesomeIcon
								size='3x'
								className='brand-icon'
								icon={['fas', 'database']}
							/>
						</p>
						<p>
							<FontAwesomeIcon
								size='3x'
								className='brand-icon'
								icon={['fas', 'code-branch']}
							/>
						</p>
						<p>
							<FontAwesomeIcon
								size='3x'
								className='brand-icon'
								icon={['fas', 'server']}
							/>
						</p>
						<p>
							<FontAwesomeIcon
								size='3x'
								className='brand-icon'
								icon={['fab', 'adobe']}
							/>
						</p>
						<p>
							<FontAwesomeIcon
								size='3x'
								className='brand-icon'
								icon={['fab', 'android']}
							/>
						</p>
						<p>
							<FontAwesomeIcon
								size='3x'
								className='brand-icon'
								icon={['fab', 'app-store-ios']}
							/>
						</p>
					</div>
				</div>
			</div>
		</div>
		// </div>
	);
}
