import React from 'react';

import { NavBarIcons } from '../icons/NavBarIcons';
import { Container, Navbar, Nav } from 'bootstrap-4-react';
import { Link } from 'react-scroll';
import colors from '../../styles/js/colors';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function HomeIcon() {
	return (
		<div id='home__icon'>
			{/* <Link to='intro' spy={true} smooth='true'> */}
			<div className='home__icon--icon'>
				<FontAwesomeIcon
					size='2x'
					icon={['fas', 'chevron-up']}
					color={colors.dark}
          
					// style={styles.icon}
					// id='iconID3'
				/>
			</div>
			{/* </Link> */}
		</div>
	);
}
