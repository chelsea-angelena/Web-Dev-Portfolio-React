import React from 'react';
// import './intro.scss';
import '../../styles/fontawesome';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-scroll';
import '../nav.scss';
import Container from 'react-bootstrap/Container';
import '../../styles/fontawesome';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../../styles/fonts.scss';

export default function SiteNav() {
	return (
		<Container
			fluid
			style={{
				display: 'flex',
				flexWrap: 'wrap',
				justifyContent: 'space-around',
				maxWidth: '100%',

				marginBottom: 40,
			}}
		>
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
					color='black'
					icon={['fa', 'angle-right']}
					style={{ marginLeft: 16 }}
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
					color='black'
					icon={['fa', 'angle-right']}
					style={{ marginLeft: 16 }}
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
					color='black'
					icon={['fa', 'angle-right']}
					style={{ marginLeft: 16 }}
				/>
			</Nav.Link>
			{/* <Link
				to='Footer'
				spy={true}
				smooth='true'
				className='projects'
				style={styles.anchorLink}
			>
				Contact
			</Link> */}
		</Container>
	);
}
const styles = {
	anchorLink: {
		width: 150,
		height: 56,
		fontSize: 24,
		marginTop: 32,
		fontFamily: 'Montserrat',
		fontWeight: 300,
		borderWidth: 1,
		borderRadius: 6,
		border: 'solid',
		padding: 8,
		cursor: 'pointer',
	},
};
