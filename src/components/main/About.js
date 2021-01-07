import React from 'react';
import bio from '../../data/bio';
import { NavBarIcons } from '../icons/NavBarIcons';
import Layout from '../layout/Layout';
import colors from '../../styles/js/colors';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { Link, animateScroll as scroll } from 'react-scroll';
const photo = require('../../assets/profile3.jpg');
const { introTitle2, email, intro2, intro4 } = bio;

export default function About() {
	const scrollTo = () => {
		scroll.scrollMore(1000);
	};
	return (
		<Layout>
			<div id='about'>
				<div className='about__main'>
					<div className='about__col1'>
						<h3 className='about__subtitle'> {introTitle2} </h3>
						<p className='about__body'>{intro2}</p>
					</div>

					<div className='about__col1'>
						<img
							// style={styles.profile}
							className='about__pic'
							alt='profile'
							width='150px'
							height='150px'
							src={photo.default}
						/>
						<p className='about__body'>{intro4}</p>
						<div className='about__border--bottom--wide'></div>

						<div className='about__icons'>
							<NavBarIcons color='black' />
						</div>
						<div className='about__border--bottom--wide'></div>

						<h4 className='about__email'>{email}</h4>
					</div>
				</div>
			</div>
			<div id='home__icon'>
				<div className='home__icon--icon'>
					<Link to='' onClick={scrollTo} spy={true} smooth='true'>
						<FontAwesomeIcon
							size='2x'
							icon={['fas', 'chevron-down']}
							color={colors.dark}

							// style={styles.icon}
							// id='iconID3'
						/>
					</Link>
				</div>
			</div>
		</Layout>
	);
}
