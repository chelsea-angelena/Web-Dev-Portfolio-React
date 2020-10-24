import React from 'react';
// import './intro.scss';
import '../../styles/fontawesome';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-scroll';
import '../nav.scss';
import Container from 'react-bootstrap/Container';

export default function InternalLink() {
	return (
		<Container
			fluid
			style={{
				display: 'flex',
				flexWrap: 'wrap',
				justifyContent: 'space-around',
				maxWidth: '100%',
				marginTop: 32,
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
			</Link>
			<Link
				to='About'
				spy={true}
				smooth='true'
				className='projects'
				style={styles.anchorLink}
			>
				About
			</Link>

			<Nav.Link
				to='/resume'
				href='/resume'
				id='resumeLink'
				style={styles.anchorLink}
			>
				Resume
			</Nav.Link>
			<Link
				to='Footer'
				spy={true}
				smooth='true'
				className='projects'
				style={styles.anchorLink}
			>
				Contact
			</Link>
		</Container>
	);
}
const styles = {
	anchorLink: {
		width: 150,
		height: 56,
		fontSize: 24,
		fontFamily: 'Montserrat',
		fontWeight: 300,
		borderWidth: 1,
		borderColor: 'white',
		borderRadius: 6,
		border: 'solid',
		padding: 8,
		marginTop: 24,
		cursor: 'pointer',
	},
};
