import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Container } from 'bootstrap-4-react';
import Nav from 'react-bootstrap/Nav';
import colors from '../../styles/js/colors';
import { Icon, InlineIcon } from '@iconify/react';
import codesandboxIcon from '@iconify-icons/simple-icons/codesandbox';
import { Link } from 'react-router-dom';

export function ProjectIcons({ path, codepen, github, demo_video, simulator }) {
	return (
		<Container fluid style={styles.container}>
			<>
				{github && (
					<a
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
					</a>
				)}

				{path && (
					<a href={path} style={styles.nav}>
						<FontAwesomeIcon
							size='3x'
							icon={['fas', 'link']}
							color={colors.dark}
							// id='iconID2'
						/>
					</a>
				)}
				{codepen && (
					<a href={codepen} style={styles.nav}>
						<Icon icon={codesandboxIcon} height='32' color={colors.dark} />
					</a>
				)}
				{demo_video && (
					<a href={demo_video} style={styles.nav}>
						<FontAwesomeIcon
							size='2x'
							icon={['fas', 'video']}
							color={colors.dark}
							// id='iconID2'
						/>
					</a>
				)}
				{simulator && (
					<Link to='/demo' style={styles.nav}>
						<FontAwesomeIcon
							size='3x'
							icon={['fa', 'mobile']}
							color={colors.dark}
							// id='iconID2'
						/>
					</Link>
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
