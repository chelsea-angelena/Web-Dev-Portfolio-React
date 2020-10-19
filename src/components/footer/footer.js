import React from 'react';
import { Nav } from 'bootstrap-4-react';
// import '../styles/fontawesome';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './footer.scss';

const FooterNav = () => {
	return (
		<Nav as='nav' style={styles.navStyles} id='Footer'>
			<div style={styles.navBarIcons} className='nav' id='Footer'>
				<Nav.Link
					rel='noopener noreferrer'
					href='https://www.linkedin.com/in/chelsea-a-brown'
					active
					style={styles.nav}
					className='nav__iconLink'
				>
					<FontAwesomeIcon
						style={styles.icon}
						size='3x'
						icon={['fab', 'linkedin-in']}
						className='nav__icon'
						id='iconID3'
					/>
				</Nav.Link>
				<Nav.Link
					href='https://github.com/chelsea-angelena'
					style={styles.nav}
					className='nav__iconLink'
				>
					<FontAwesomeIcon
						className='nav__icon'
						style={styles.icon}
						size='3x'
						icon={['fab', 'github']}
						id='iconID2'
					/>
				</Nav.Link>
				<Nav.Link
					href='@mailto:chelsea.angelena@gmail.com'
					style={styles.nav}
					className='nav__iconLink'
					id='iconID'
				>
					<FontAwesomeIcon
						className='nav__icon'
						style={styles.icon}
						size='3x'
						icon={['far', 'envelope']}
					/>
				</Nav.Link>
			</div>
		</Nav>
	);
};

// <div class='contact__icon--div'>
// 					<a
// 						class='contact__icon'
// 						href='https://www.linkedin.com/in/chelsea-a-brown'
// 						target='_blank'
// 					>
// 						<img src='../../assets/WHITEin-icon.png' icon color='white' />
// 					</a>
// 					<a
// 						class='contact__icon'
// 						href='https://github.com/chelsea-angelena'
// 						target='_blank'
// 					>
// 						<img
// 							src='../../assets/invert-github-icon.png'
// 							alt='icon'
// 							color='white'
// 						/>
// 					</a>
// 					<a
// 						class='contact__icon'
// 						href='https://www.linkedin.com/in/chelsea-a-brown'
// 						target='_blank'
// 					>
// 						<img src='../../GMAIL.png' alt='icon' color='white' />
// 					</a>

export default FooterNav;

const styles = {
	navStyles: {
		maxWidth: '100%',
		backgroundColor: 'rgba(0,0,0,.4)',
		// borderBottomColor: 'white',
		// borderBottomWidth: 2,
		display: 'flex',
		flexDirection: 'row',
	},
	// navBarIcons: {
	// 	maxWidth: '100%',
	// 	display: 'flex',
	// 	flexDirection: 'row',
	// 	flexWrap: 'no-wrap',
	// 	alignItems: 'center',
	// 	justifyContent: 'center',
	// },
	// icon: {
	// 	color: 'white',
	// 	borderWidth: 2,
	// 	borderColor: 'white',
	// 	borderStyle: 'solid',
	// 	width: 50,
	// 	height: 50,
	// 	padding: 4,
	// 	borderRadius: 6,
	// 	display: 'inline-block',
	// 	marginTop: 24,
	// 	marginBottom: 24,
	// 	flexDirection: 'row',
	// },
};
