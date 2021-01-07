import React from 'react';
import { NavBarIcons } from '../icons/NavBarIcons';
import { Navbar } from 'bootstrap-4-react';

import colors from '../../styles/js/colors';

export default function Footer() {
	return (
		<Navbar
			expand='sm'
			dark
			fluid='true'
			// sticky
			// fixed='bottom'
			// className='bg-dark'
			style={{
				backgroundColor: colors.dark,
				color: 'white',
				paddingTop: 16,
				paddingBottom: 16,
				// height: 100,
				// marginTop: 75,
				// margin: 0,
				zIndex: 15,
				textAlign: 'left',
				flexDirection: 'column',
			}}
		>
			{/* <div id='footer'> */}

			<div className='footer__content'>
				<NavBarIcons color='white' />
			</div>
			<div className='footer__content'>Made by Chelsea ©2020</div>
			{/* </div> */}
		</Navbar>
	);
}
