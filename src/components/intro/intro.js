import React from 'react';
import './intro.scss';
import '../../styles/fontawesome';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Intro() {
	return (
		<div className='landing-div'>
			<div>
				<div className='header__text--div'>
					<h2 className='header__text'>Chelsea Brown</h2>
					<h2 className='header__text'>Full Stack Developer</h2>
					<div className='header__text--row'>
						<h1 className='header__text--row'>Interactive</h1>
						<p>•</p>
						<h1 className='header__text--row'>Responsive</h1>
						<p>•</p>
						<h1 className='header__text--row'>Applications</h1>
						<h1 className='header__second'>
							Mobile <span className='ellipse'>•</span> Web
							<span className='ellipse'>•</span>Desktop
						</h1>
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
	);
}
// const styles = {
// 	brandIcon: {
// 		width: 32,
// 	},
// };
// const styles = {
// 	landing: {
// 		width: '100%',
// 		display: 'flex',
// 		alignItems: '',
// 		justifyContent: 'center',
// 		flexDirection: 'column',
// 	},
// };
