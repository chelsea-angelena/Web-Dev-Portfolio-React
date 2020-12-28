import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Container } from 'bootstrap-4-react';
import Nav from 'react-bootstrap/Nav';

export function SocialIcons() {
	return (
		<Container style={styles.container} fluid>
			<>
				<Nav.Link
					rel='noopener noreferrer'
					href='https://www.linkedin.com/in/chelsea-a-brown'
					// active
					// style={styles.nav}
				>
					<FontAwesomeIcon
						size='4x'
						icon={['fab', 'linkedin-in']}
						style={styles.icon}
						// id='iconID3'
					/>
				</Nav.Link>
				<Nav.Link href='https://github.com/chelsea-angelena' style={styles.nav}>
					<FontAwesomeIcon
						size='4x'
						icon={['fab', 'github']}
						// id='iconID2'
						style={styles.icon}
					/>
				</Nav.Link>
				<Nav.Link
					href='https://codesandbox.io/u/chelsea-angelena'
					style={styles.nav}
				>
					<FontAwesomeIcon
						size='4x'
						icon={['fab', 'codepen']}
						// id='iconID2'
						style={styles.icon}
					/>
				</Nav.Link>
			</>
		</Container>
	);
}

export function TechIcons() {
	return (
		<Container
			fluid
			style={{
				display: 'flex',
				flexDirection: 'row',
				alignSelf: 'center',
				justifyContent: 'space-evenly',
				width: '100%',
			}}
		>
			<p>
				<FontAwesomeIcon
					size='2x'
					className='brand-icon-small'
					icon={['fab', 'js-square']}
					style={{ color: 'hsl(240.2, 100%, 98.4%)' }}
				/>
			</p>
			<p>
				<FontAwesomeIcon
					size='2x'
					className='brand-icon-small'
					icon={['fab', 'html5']}
					style={{ color: 'hsl(240.2, 100%, 98.4%)' }}
				/>
			</p>
			<p>
				<FontAwesomeIcon
					size='2x'
					className='brand-icon-small'
					icon={['fab', 'css3']}
					style={{ color: 'hsl(240.2, 100%, 98.4%)' }}
				/>
			</p>
			<p>
				<FontAwesomeIcon
					size='2x'
					className='brand-icon-small'
					icon={['fas', 'database']}
					style={{ color: 'hsl(240.2, 100%, 98.4%)' }}
				/>
			</p>
			<p>
				<FontAwesomeIcon
					size='2x'
					className='brand-icon-small'
					icon={['fas', 'code-branch']}
					style={{ color: 'hsl(240.2, 100%, 98.4%)' }}
				/>
			</p>
			<p>
				<FontAwesomeIcon
					size='2x'
					className='brand-icon-small'
					icon={['fas', 'server']}
					style={{ color: 'hsl(240.2, 100%, 98.4%)' }}
				/>
			</p>
			<p>
				<FontAwesomeIcon
					size='2x'
					className='brand-icon-small'
					style={{ color: 'hsl(240.2, 100%, 98.4%)' }}
					icon={['fab', 'app-store-ios']}
				/>
			</p>
		</Container>
	);
}
// const GalleryIcons = () => {
// 	return (
// 		<div className='gallery__icons'>
// 			<a href='/' className='gallery__icons--link'>
// 				<FontAwesomeIcon
// 					size='2x'
// 					icon={['fas', 'link']}
// 					// id='iconID2'
// 					color={colors.white}
// 				/>
// 			</a>
// 			<a href='/' className='gallery__icons--link'>
// 				<FontAwesomeIcon
// 					size='2x'
// 					icon={['fas', 'code']}
// 					// id='iconID2'
// 					color={colors.white}
// 				/>
// 			</a>
// 		</div>
// 	);
// };
const styles = {
	icon: {
		borderWidth: 2,
		borderRadius: 6,
		width: 75,
		borderStyle: 'solid',
		height: 75,
		padding: 6,
		color: 'white',
	},
	container: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'center',
	},
};
