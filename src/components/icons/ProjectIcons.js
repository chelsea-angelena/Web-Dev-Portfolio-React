import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Container } from 'bootstrap-4-react';
import Nav from 'react-bootstrap/Nav';
import colors from '../../styles/js/colors';

export function ProjectIcons({
	path,
	codepen,
	github,
	demo_video,
	simulator,
}) {
	return (
		<Container fluid style={styles.container}>
			<>
				{github && (
					<Nav.Link
						rel='noopener noreferrer'
						href={github}
						active
						color={colors.dark}
						// style={styles.nav}
					>
						<FontAwesomeIcon
							size='3x'
							icon={['fab', 'github']}
							color={colors.dark}
							// id='iconID3'
						/>
					</Nav.Link>
				)}

				{path && (
					<Nav.Link href={path} style={styles.nav}>
						<FontAwesomeIcon
							size='3x'
							icon={['fas', 'link']}
							color={colors.dark}
							// id='iconID2'
						/>
					</Nav.Link>
				)}
				{codepen && (
					<Nav.Link href={codepen} style={styles.nav}>
						<FontAwesomeIcon
							size='3x'
							icon={['fab', 'codepen']}
							color={colors.dark}
							// id='iconID2'
						/>
					</Nav.Link>
				)}
				{demo_video && (
					<Nav.Link href={demo_video} style={styles.nav}>
						<FontAwesomeIcon
							size='2x'
							icon={['fas', 'video']}
							color={colors.dark}
							// id='iconID2'
						/>
					</Nav.Link>
				)}
				{simulator && (
					<Nav.Link href='/demo' style={styles.nav}>
						<FontAwesomeIcon
							size='3x'
							icon={['fa', 'mobile']}
							color={colors.dark}
							// id='iconID2'
						/>
					</Nav.Link>
				)}
			</>
		</Container>
	);
}

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
